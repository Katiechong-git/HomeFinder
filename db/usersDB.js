const { MongoClient } = require("mongodb");
require("dotenv").config();
function UsersDB() {
  const usersDB = {};

  const uri = process.env.MONGO_URL || "mongodb://localhost:27017";
  console.log("file: usersDB.js ~ line 7 ~ UsersDB ~ uri", uri);

  usersDB.getUsers = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db("craigslistDB");
      const users = db.collection("users");

      const query = {};

      return users
        .find(query)
        .sort({ _id: -1 })
        .limit(10)
        .toArray()
        .finally(() => client.close());
    } catch (err) {
      console.log("Error connecting to the database", err);
    }
  };

  // usersDB.initialize = async () => {
  //   const client = new MongoClient(uri, { useUnifiedTopology: true });

  //   await client.connect();

  //   const db = client.db("posts");
  //   const posts = db.collection("posts");t

  //   console.log("initializing database");
  //   for (let i = 0; i < 100; i++) {
  //     await posts.insertOne({
  //       text: "Something " + i,
  //       author: "John " + i,
  //     });
  //   }

  //   console.log("done");
  // };

  usersDB.createUser = async (user) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    await client.connect();

    const db = client.db("craigslistDB");
    const users = db.collection("users");

    return await users.insertOne(user);
  };

  usersDB.findByUsername = async (username) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db("craigslistDB");
      const users = db.collection("users");

      return users.findOne({ username }).finally(() => client.close());
    } catch (err) {
      console.log("Error connecting to the database", err);
    }
  };

  return usersDB;
}

module.exports = UsersDB();
