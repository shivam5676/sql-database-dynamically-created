const bodyParser = require("body-parser");
const path=require("path")
const express = require("express");
const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop");
const contactRoutes=require("./routes/contact")

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); 

app.use("/admin",adminRoutes);
app.use(contactRoutes)
app.use(shopRoutes);
app.use( (req,res,next) => {
  res.status(404).sendFile(path.join(__dirname,"views","404.html"))
  console.log("Hello Shivam")
})


app.listen(3000);
