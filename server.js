const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  const friends = [
    { name: "Carina", department: "Product Designer", interest: "Dota" },
    { name: "Reshma", department: "Product Manager", interest: "Running" },
    { name: "Fabian", department: "Software Engineer", interest: "gymming" },
    { name: "Sean", department: "Software Engineer", interest: "Drinking" },
    { name: "Kaiwen", department: "Software Engineer", interest: "honeymooning" },
    { name: "Geraldine", department: "Product Operations", interest: "BFT" },
  ];
  const tagline = "These are ppl in RedeemSG ";

  res.render("pages/index", {
    friends: friends,
    tagline: tagline,
  });
});

// work page
app.get("/work", function (req, res) {
    const products = [
      { name: "RedeemSG", about: "giving money" },
      { name: "Frisbee", about: "throwing disc" },
    ];
  
    res.render("pages/work", {
      products: products,
    });
  });

// about page
app.get("/interest", function (req, res) {
  res.render("pages/interest");
});

app.listen(3000);
console.log("Server is listening on port 3000");