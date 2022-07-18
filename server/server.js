const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001
const app = express();

// define cors options to allow for connection
let corsOptions = {
    origin: "https://app.goflightlabs.com",
    optionsSuccessStatus: 200
}

app.use(cors());

app.get();

app.listen(80, function(){
    console.log(`App functioning on port ${PORT}`);
});