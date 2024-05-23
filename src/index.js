const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const { PORT } = require('./config/serverConfig');
// const CityRepository = require('./repository/city-repository')
const ApiRoutes = require('./routes/index')


const setupAndStartServer = async () => {

    app.get('/', (req, res)=>{
        res.send("hello")
    })
   
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))
  

app.use('/api',ApiRoutes)

  app.listen(PORT,async() => {  
    console.log(`Server starting at ${PORT}`);
    

  });
};

setupAndStartServer();
