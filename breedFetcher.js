const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);
let breedname = args[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`,
  (error, response, body) => {
    if (error) {
      console.log("Error");
      return;
    }
    const data = JSON.parse(body);

    if (!data.length) {
      console.log("No Breed");
      return;
    }
    console.log(`Breedname is ${breedname}: ${data[0]["description"]}`);
  }
);
