const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// General query to get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get one user by ID
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: { id: req.params.id },
    include: [
      {
        model: Post,
        attributes: ["id", "title", "contents", "created_at"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Post,
          attributes: ["title"],
        },
      },
    ],
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "no user found for this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a user session
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((data) => {
      req.session.save(() => {
        req.session.user_id = data.id;
        req.session.username = data.username;
        req.session.loggedIn = true;
        res.json(data);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  // expects {"username": "Don Juan", "password": "12345"}
  User.findOne({ where: { username: req.body.username } })
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "No user with that username" });
        return;
      }
      const validPassword = data.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: "Wrong password" });
        return;
      }
      req.session.save(() => {
        req.session.user_id = data.id;
        req.session.username = data.username;
        req.session.loggedIn = true;
        res.json({
          user: data,
          message: "You are now logged in.",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end;
  }
});

// Update an user by ID
router.put("/:id", (req, res) => {
  // expects {"username": "Don James", "password": "12345"}
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "no user found for this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete an user by ID
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No user found for this id" });
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
