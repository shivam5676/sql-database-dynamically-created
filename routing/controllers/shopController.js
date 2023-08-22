const path=require("path")

const shopControl=(req, res, next) => {
    res.sendFile(path.join(__dirname,"../","views","shop.html"));
}
    module.exports=shopControl;