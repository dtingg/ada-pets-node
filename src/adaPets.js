// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data)
    // Code that executes with a successful response goes here
  })
  .catch((error) => {
    // Code that executes with an unsuccessful response goes here
    setError("An error occurred.")
  });
}

const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 2.
  axios.get(`${BASE_URL}${selectedPet}`)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError("Error: Failed to get pet details.")
  });
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 3.
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}


// hould setResult and object with details for the pet and should call setError with an error message if the request fails.
// You can run the Wave 2 tests with jest test/wave2.test.js. Once these are passing move on to Wave 3.
// Function to complete
// •	showDetails
// o	setResult should be passed the Object that represents the pet.
// o	setError should be passed an error message. (You may need to write this.)
// 	The tests for this wave are looking for an error message that will include two specific words inside of the string. (It does this with Regex). Part of this wave is to read through the tests and determine what two words should be inside of the error message string. What two words are expected to be in this error message? Work with a neighbor on this in order to find out.
