const { nextISSTimeForMyLocation } = require("./iss");

const passingTime = (passTimes) => {
  for (const time of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds `);
  }
};

nextISSTimeForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  passingTime(passTimes);
});

module.exports = { passingTime };
