require("dotenv").config({path:"./config.env"});
const express = require ("express");
const app = express ();
app.use(require("./routes/record"));
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const dbo=require("./db/conn");

app.listen(port,()=>{
    dbo.connectToServer(function(err){
        if(err)console.error(err);

    });
    console.log(`server is running on port : ${port}`);
    app.get('/', (req, res) => {
        res.send('GET request to the homepage')
      })
});