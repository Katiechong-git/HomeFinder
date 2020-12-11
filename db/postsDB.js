const { MongoClient } = require("mongodb");
const objectID = require("mongodb").ObjectID;

function PostsDB() {
  const postsDB = {};

  const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

  postsDB.getPosts = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db("craigslistDB");
      const posts = db.collection("posts");

      const query = {};

      return (
        posts
          .find(query)
          // .sort({ _id: -1 })
          // .limit(4)
          .toArray()
          .finally(() => client.close())
      );
    } catch (err) {
      console.log("Error connecting to the database", err);
    }
  };

  postsDB.getPostById = async (postId) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      await client.connect();

      const db = client.db("craigslistDB");
      const posts = db.collection("posts");

      const mongoId = new objectID(postId);

      return posts.findOne({ _id: mongoId }).finally(() => client.close());
    } catch (err) {
      console.log("Error connecting to the database", err);
    }
  };

  return postsDB;
}

module.exports = PostsDB();
