const express=require("express")
const router=express.Router()
router.get("/add-product", (req, res, next) => {
    res.send(
      '<form action="/product" method="POST"><input type="text" name="title"></input><input type="text" name="size"></input><button type="submit">Add product</button></form>'
    );
  });
  
  router.get("/product", (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size)
    res.redirect("/");
  });

  module.exports=router;