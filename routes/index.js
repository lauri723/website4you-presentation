const express  = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index");
  });

router.get("/home", (req, res) => {
    res.render("home");
  });
  
router.get("/uses", (req, res) => {
    res.render("uses");
  });

router.get("/included", (req, res) => {
    res.render("included");
  });

router.get("/options", (req, res) => {
    res.render("options");
  });

router.get("/vidLogin", (req, res) => {
  res.render("vidLogin");
});

router.get("/vidAlbums", (req, res) => {
  res.render("vidAlbums");
});

router.get("/vidPhotos", (req, res) => {
  res.render("vidPhotos");
});

router.get("/vidTopics", (req, res) => {
  res.render("vidTopics");
});

router.get("/vidStories", (req, res) => {
  res.render("vidStories");
});

router.get("/vidPresentation", (req, res) => {
  res.render("vidPresentation");
});



module.exports = router
