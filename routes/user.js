const express=require("Express")

const router=express.Router();

router.get("/newtable",(req,res)=>{
    //table will be fetched  and a add button will be added  here
    res.send('<html><form action="/newtable" method="POST"><input name="tbname" placeholder="tbname"></input><input name="user" placeholder="name"></input><input name="id" placeholder="id number"></input><button type="submit">create table</button></form></html>')
})
router.post("/newtable",(req,res)=>{
   //when user clicks on add table then this api will create a table with same input which is provide in form 
   const body=req.body
   var sql = `CREATE TABLE ${body.tbname} ( ${body.user} VARCHAR(255), ${body.id} VARCHAR(255))`;
   console.log(sql)
})
router.get("/newuser",(req,res)=>{
    //after creating table if user clics on any table then this add user button will be shown and here user list will also be fetched related to that table name 
    res.send('<html><button>Add user</button></html>')
})

router.get("/newuser",(req,res)=>{
    //when user clicks on  add user button then user added to the same table using same input fields
})

module.exports=router;