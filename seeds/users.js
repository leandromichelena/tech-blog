const { User } = require("../models");

const users = [
    {
        username: "leandro",
        password: "password01!",
    },
    {
        username: "julia",
        password: "password01!",
    },
    {
        username: "luciano",
        password: "password01!",
    },
    {
        username: "gabriel",
        password: "password01!",
    },
    {
        username: "gustavo",
        password: "password01!",
    },
    {
        username: "luisa",
        password: "password01!",
    },
    {
        username: "priscilla",
        password: "password01!",
    },
    {
        username: "lucas",
        password: "password01!",
    },
    {
        username: "rochelle",
        password: "password01!",
    },
    {
        username: "felipe",
        password: "password01!",
    },
];

const seedUsers = () => User.bulkCreate(users, { individualHooks: true });

module.exports = seedUsers;