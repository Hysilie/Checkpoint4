const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const plantsDirectory = process.env.PLANTS_DIRECTORY || "public/";

const rename = (req, res, next) => {
  /* file names */
  const { originalname } = req.file;
  const { filename } = req.file;

  /* Rename file */
  const uuid = uuidv4();
  fs.rename(
    `${plantsDirectory}${filename}`,
    `${plantsDirectory}${uuid}-${originalname}`,
    (err) => {
      if (err) throw err;
      req.picture = `${uuid}-${originalname}`;
      next();
    }
  );
};

const upload = (req, res) => {
  const { fileName } = req.params;

  res.download(plantsDirectory + fileName, fileName, (err) => {
    if (err) {
      res.status(404).send({
        message: `Picture not found.`,
      });
    }
  });
};

module.exports = { rename, upload };
