const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const app=express();
const UserRoutes=require("./routes/user")
app.use(cors())
app.use(bodyParser.json())

app.use(UserRoutes)
app.listen(5000);