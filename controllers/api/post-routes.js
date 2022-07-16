const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// General query to get all posts
router.get("/", (req, res) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        include: {
          model: User,
        },
      },
    ],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get post by ID
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'contents',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a post
router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    contents: req.body.contents,
    user_id: req.session.user_id,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update an existing post by ID
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      contents: req.body.contents,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No post found for this id." });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a post by ID
router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No post found for this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
