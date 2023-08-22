const express=require("express")
const path=require("path")


const shopController=require("../controllers/shopController")
const router=express.Router();
router.get('/',shopController );
  module.exports=router;