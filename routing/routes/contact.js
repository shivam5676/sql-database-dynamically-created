const express=require("express");
const path=require("path");

const contactController=require("../controllers/contact")
// const contactControllerPost=require("../controllers/contact")

const router=express.Router();
router.get("/contact",contactController.contactControllerget)
router.post("/success",contactController.contactControllerPost)
module.exports=router;