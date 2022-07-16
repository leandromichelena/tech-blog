const { Comment } = require("../models");

const comments = [
    {
        comment_text: "Great insights!",
        user_id: 6,
        post_id: 1,
    },
    {
        comment_text:
            "This is amazing.",
        user_id: 6,
        post_id: 2,
    },
    {
        comment_text: "Interesting news. I'm bookmarking this.",
        user_id: 3,
        post_id: 3,
    },
    {
        comment_text:
            "That's how we apply this on my job.",
        user_id: 3,
        post_id: 4,
    },
    {
        comment_text: "Looking forward to using this.",
        user_id: 7,
        post_id: 5,
    },
    {
        comment_text: "This is so cool.",
        user_id: 1,
        post_id: 6,
    },
    {
        comment_text:
            "Fantastic",
        user_id: 6,
        post_id: 7,
    },
    {
        comment_text: "Meh, this is boring.",
        user_id: 7,
        post_id: 8,
    },
    {
        comment_text:
            "Keep it up!",
        user_id: 6,
        post_id: 9,
    },
    {
        comment_text: "That's fun LOL",
        user_id: 6,
        post_id: 1,
    },
    {
        comment_text:
            "Nice nice nice",
        user_id: 3,
        post_id: 2,
    },
    {
        comment_text: "Saved this",
        user_id: 5,
        post_id: 3,
    },
    {
        comment_text:
            "I wish I knew this before",
        user_id: 4,
        post_id: 4,
    },
    {
        comment_text:
            "Nice share, thanks!",
        user_id: 5,
        post_id: 5,
    },
    {
        comment_text: "This is not the best approach to this problem.",
        user_id: 6,
        post_id: 6,
    },
    {
        comment_text: "That's a great idea",
        user_id: 8,
        post_id: 7,
    },
    {
        comment_text: "Love this!",
        user_id: 2,
        post_id: 8,
    },
    {
        comment_text: "Favorited!",
        user_id: 4,
        post_id: 9,
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;