const path=require("path");

exports.contactControllerget=(req,res,next) => {
    res.sendFile(path.join(__dirname,"../","views","contact.html"))
}


exports.contactControllerPost=(req,res,next) => {
    res.sendFile(path.join(__dirname,"../","views","success.html"))
}

// module.exports=contactControllerget;
// module.exports=contactControllerPost;