module.exports = {
  home: (req, res) => {
    res.render("index", { title: "Home" });
  },

  services: (req, res) => {
    res.render("services", { title: "Services" });
  },
  contact: (req, res) => {
    res.render("contact", { title: "Contact" });
  },
  contactForm: (req, res) => {
    const userData = req.body;
    console.log(userData);
    res.redirect("contact");
  },
  about: (req, res) => {
    res.render("about", { title: "About" });
  },
  testimonials: (req, res) => {
    res.render("testimonials", { title: "Testimonial" });
  },
};
