const { nextISSTimesForMyLocation } = require("./iss_promised");
const { passingTime } = require("./index");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    passingTime(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
