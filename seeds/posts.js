const { Post } = require("../models");

const posts = [
    {
        title: "CSS tips and tricks.",
        contents: "This is a post about CSS",
        user_id: 1,
    },
    {
        title: "How to use the ALT attribute",
        contents: "The required alt attribute specifies an alternate text for an image, if the image cannot be displayed.",
        user_id: 2,
    },
    {
        title: "Node.JS nice trick",
        contents: "https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager",
        user_id: 3,
    },
    {
        title: "Fun links",
        contents: "https://skillcrush.com/blog/web-developer-free-resources/",
        user_id: 4,
    },
    {
        title: "Bootstrap icons and fonts",
        contents: "https://fontawesome.com/icons/bootstrap",
        user_id: 5,
    },
    {
        title: "MDN links",
        contents: "Check this link: https://developer.mozilla.org/en-US/docs/Learn",
        user_id: 1,
    },
    {
        title: "My next course",
        contents: "Any thoughts https://www.coursera.org/professional-certificates/meta-back-end-developer",
        user_id: 2,
    },
    {
        title: "Check out this amazing project",
        contents: "https://lazy-plant-caretaker.herokuapp.com/",
        user_id: 3,
    },
    {
        title: "Found this nice site about planing trips",
        contents: "https://p1group5.github.io/trip-it/",
        user_id: 4,
    }
];

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;