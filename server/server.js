const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

// define cors options to allow for connection
let corsOptions = {
    origin: "https://app.goflightlabs.com",
    optionsSuccessStatus: 200
}

app.use(cors());

// define path to what is being retrieved from flighttracker

// enables single route
app.get('/flights/flightNUmber/iataNumber', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'this is cors enable fingle route'})
})


app.listen(PORT, () => {
    console.log(`App functioning on port ${PORT}`);
});