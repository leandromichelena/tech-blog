const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// getting all comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// posting a new comment
router.post("/", withAuth, (req, res) => {
  // expects {"comment_text": "This is the comment", "user_id": 1, "post_id": 1}
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// deleting a comment
router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No comment found for this id!" });
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
