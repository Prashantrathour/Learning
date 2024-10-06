const fs = require("fs");

const timelogger = (req, res, next) => {
  const t1 = new Date().getTime();
  try {
    next();
    const t2 = new Date().getTime();
    const timeTaken = t2 - t1;
    fs.appendFileSync("./text.txt",`${req.url} ${req.method}  `+ "Time taken: " + timeTaken.toString() + "\n");
  } catch (error) {
    res.json({ error });
  }
};

module.exports = timelogger;
