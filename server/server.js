const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// define cors options to allow for connection
const corsOptions = {
    // origin: "https://app.goflightlabs.com",
    origin: "*",
    optionsSuccessStatus: 200
}

// define path to what is being retrieved from flightTracker

// enables single route
app.get('/flights/flightNumber/iataNumber', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'cors enabled get route'})
})


app.listen(PORT, () => {
    console.log(`App servingon port ${PORT}`);
});