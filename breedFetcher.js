const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);
let breedname = args[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`,
  (error, response, body) => {
    fs.writeFile("https://api.thecatapi.com/v1/breeds", body, (error) => {
      if (!error) {
        return;
      }
      const data = JSON.parse(body);
      console.log(`Breedname is ${breedname}: ${data[0]["description"]}`);
    });
  }
);
