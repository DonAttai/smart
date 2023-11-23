const router = require("express").Router();
const pagesController = require("../controllers/pages.controller");

router.get("/", pagesController.home);
router.get("/services", pagesController.services);
router.get("/contact", pagesController.contact);
router.post("/contact", pagesController.contactForm);
router.get("/about", pagesController.about);
router.get("/testimonials", pagesController.testimonials);

module.exports = router;
