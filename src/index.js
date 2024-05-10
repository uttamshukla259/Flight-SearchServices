const express = require("express");
const app = express();

const { PORT } = require('./config/serverConfig');




const setupAndStartServer = async () => {

    app.get('/', (req, res)=>{
        res.send("hello")
    })
  app.listen(PORT, () => {
    console.log(`Server starting at ${PORT}`);
  
  });
};

setupAndStartServer();
