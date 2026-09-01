const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://goga0917_db_user:ygSPMc8VASvhU5tX@cluster0.dj82b95.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB", err);
    } else {
      console.log("MongoDB connection succeed");

      module.exports = client.db();

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
