const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
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
      console.log(`Breedname is ${breedName}: ${data[0]["description"]}`);
    }
  );
};
module.exports = { fetchBreedDescription };
