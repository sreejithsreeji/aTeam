let upload = uploadConfig => {
  const multer = uploadConfig.engine;
  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, `.${uploadConfig.folder}`);
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

  var upload = multer({
    storage: storage,
    limits: { fileSize: uploadConfig.maxSize },
    fileFilter: function(req, file, cb) {
      if (file.mimetype == uploadConfig.fileType) cb(null, true);
      else {
        cb(new Error("Invalid file format"));
      }
    }
  }).single(uploadConfig.field);
  return upload;
};

module.exports = {
  upload
};
