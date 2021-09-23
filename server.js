const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000


app.use(express.static(__dirname + "/public"));


app.get("/",(req,res)=>{
   return  res.send("This is from server");
    
})
// app.get('/home', (req, res) => {
//     res.sendFile(path.resolve(__dirname + '/public/index.html'))
//   })

app.listen(PORT)