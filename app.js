const express=require("express")
const bodyparser=require("body-parser")
const app=express();
const UserRoutes=require("./routes/user")
app.use(bodyparser.urlencoded({extended:false}))

app.use(UserRoutes)
app.listen(3000)