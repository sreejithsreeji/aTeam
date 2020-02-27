const userController = require("../controllers/user");
const multer = require("multer");
const uploadCtrl = require("../shared/upload.js");

const uploadConfig = {
  engine: multer,
  folder: "/uploads",
  fileType: "image/jpeg",
  maxSize: 1 * 1000 * 1000,
  field: "profile_pic"
};
const upload = uploadCtrl.upload(uploadConfig);

let uploadFile = (req, res, next) => {
  // console.log(req)
  upload(req, res, err => {
    if (err) {
      res.status(200).send({
        status: false,
        code: err.code,
        message:
          err.code == "LIMIT_FILE_SIZE"
            ? "File exceeds maximum limits..Max file size should be below 2MB"
            : err
      });
    } else {
      next();
    }
  });
};

module.exports = server => {
  server.get("/users:", (req, res, next) => {
    userController.getAll(req, res, next);
  });

  server.post("/users", uploadFile, (req, res, next) => {
    userController.register(req, res, next);
  });

  server.put("/users/:id", (req, res, next) => {
    next();
  });

  server.post("/login", (req, res, next) => {
    userController.login(req, res, next);
  });

  server.get("/users/:email/friends", (req, res, next) => {
    userController.getFriends(req, res, next);
  });

  server.get("/users/:email/requests", (req, res, next) => {
    userController.getRequests(req, res, next);
  });

  server.post("/users/:email/request/send", (req, res, next) => {
    /* body={
        senderId: userId (subset of users),
        recepiantId: userId (subset of users);
      }
      update collection, find the record which has the senderid as key, and add requests to the record,
      make status as false by default.
      here we can use Socket.io for realtime communication. create an event 'new requests' and update the records.
      */
    })
    
    server.post('/users/:email/friends/requests/approve', (req,res,next)=>{
      /*
      /*body={
        senderid: userId,
      }
      find the user by using the key provided here email, 
      and update the friends array by adding this object to the array.
      also delete corresponding request entry from the requests array of the provided user.
*/
  });
};
