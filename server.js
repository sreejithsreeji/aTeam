const restify = require("restify");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./config");

const server = restify.createServer({
  name: "App Server",
  version: "1.0.0"
});

/*const users=require('./routes/user');
  server.use('/api/v1/users',users);

  in express this will work but in restify this lead to a problem. 
  what will we do to remove this problem,or how can we move the control to route handler*/

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.pre(restify.pre.sanitizePath())
server.use(restify.plugins.bodyParser());

// server.use('api/v1/users',users)

server.listen(process.env.PORT, () => {
  mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

const db = mongoose.connection;

db.on("error", err => {
  console.log(err);
});

db.once("open", () => {
  console.log("db connected");
  const users = require("./routes/user")(server);
  console.log(`server listening in port ${process.env.PORT}`);
});
