// Sports Day function with callback hell
function SportsDay() {
    // Initialize scores
    let scores = {red: 0, yellow: 0, blue: 0, green: 0};
  
    // Opening Ceremony
    setTimeout(function() {
      console.log("Let the games begin!");
      Race100M(scores, function(scores) {
        LongJump(scores, function(scores) {
          HighJump(scores, function(scores) {
            AwardCeremony(scores);
          });
        });
      });
    }, 1000);
  
    // Race100M
    function Race100M(scores, callback) {
      console.log("Starting Race 100M");
      let times = {
        red: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10,
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10
      };
  
      let sortedTimes = Object.keys(times).sort(function(a, b) {
        return times[a] - times[b];
      });
  
      scores[sortedTimes[0]] += 50;
      scores[sortedTimes[1]] += 25;
  
      console.log("Race 100M results:", times);
      console.log("Score:", scores);
  
      setTimeout(function() {
        callback(scores);
      }, 2000);
    }
  
    // LongJump
    function LongJump(scores, callback) {
      console.log("Starting Long Jump");
      let color = ['red', 'yellow', 'blue', 'green'][Math.floor(Math.random() * 4)];
      scores[color] += 150;
  
      console.log("Long Jump winner:", color);
      console.log("Score:", scores);
  
      setTimeout(function() {
        callback(scores);
      }, 1000);
    }
  
    // HighJump
    function HighJump(scores, callback) {
      console.log("Starting High Jump");
      let color = prompt("Who secured the highest jump? (Red, Yellow, Blue, Green)");
  
      if (color === null || color === "") {
        console.log("Event was cancelled.");
        callback(scores);
      } else if (color.toLowerCase() in scores) {
        scores[color.toLowerCase()] += 100;
  
        console.log(`High Jump winner: ${color}`);
        console.log("Score:", scores);
  
        setTimeout(function() {
          callback(scores);
        }, 1500);
      } else {
        console.log(`Invalid input. ${color} does not exist.`);
        callback(scores);
      }
    }
  
    // Award Ceremony
    function AwardCeremony(scores) {
      console.log("Award Ceremony");
  
      // Sort scores
      let sortedScores = Object.entries(scores).sort(function(a, b) {
        return b[1] - a[1];
      });
  
      // Declare winners
      console.log(`${sortedScores[0][0].toUpperCase()} came first with ${sortedScores[0][1]} points.`);
      console.log(`${sortedScores[1][0].toUpperCase()} came second with ${sortedScores[1][1]} points.`);
      console.log(`${sortedScores[2][0].toUpperCase()} came third with ${sortedScores[2][1]} points.`);
    }
  }
  
  // Start the Sports Day
  SportsDay();
  