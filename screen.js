

const http=require("http")
const server=http.createServer((req,res)=>{
    console.log(req)
 res.writeHead(200,{ 'Content-Type': 'text/plain'})
 res.end("myname is shivam singh ")
})
server.listen(4000)