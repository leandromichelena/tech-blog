const seedUsers = require("./users");
const seedPosts = require("./posts");
const seedComments = require("./comments");

const sequelize = require("../config/connection");

const seeds = async () => {
    await sequelize.sync({ force: true });
    console.log("Seeding");

    await seedUsers();
    console.log("Users Added");

    await seedPosts();
    console.log("Posts Added");

    await seedComments();
    console.log("Comments Added");

    process.exit(0);
};

seeds();