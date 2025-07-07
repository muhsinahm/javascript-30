import { AJAX_COUNTRIES } from "../Utilities/constants.js";
import {
  numberWithCommas,
  setAttributes,
} from "../Utilities/UtilityFunctions.js";

const form = document.createElement("form");
form.className = "search-form";
document.body.appendChild(form);

const inputField = document.createElement("input");
inputField.className = "search";
setAttributes(inputField, {
  type: "text",
  placeholder: "City or State",
});
form.appendChild(inputField);

const suggestionsList = document.createElement("ul");
suggestionsList.className = "suggestions";
form.appendChild(suggestionsList);

const suggestion1 = document.createElement("li");
suggestion1.textContent = "Filter for a city";
suggestionsList.appendChild(suggestion1);

const suggestion2 = document.createElement("li");
suggestion2.textContent = "or a state";
suggestionsList.appendChild(suggestion2);

let cities = [];

const fetchCities = async () => {
  try {
    const response = await axios.get(AJAX_COUNTRIES);
    return response?.data || [];
  } catch (error) {
    console.log("Error Fetching Data: ", error);
    return [];
  }
};

function findMatches(wordToMatch, cities) {
  return cities?.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place?.city?.match(regex) || place?.state?.match(regex);
  });
}

fetchCities().then((places) => {
  cities = places;
});

inputField.addEventListener("input", (e) => {
  const searchTerm = e.target.value;
  const filteredCities = findMatches(searchTerm, cities);
  suggestionsList.innerHTML = "";

  if (searchTerm === "") {
    suggestionsList.innerHTML = `<li>Filter for a city</li>
      <li>or a state</li>
`;
  } else if (filteredCities.length === 0) {
    const noResults = document.createElement("li");
    noResults.textContent = "No Matched Found";
    suggestionsList.appendChild(noResults);
  } else {
    filteredCities.forEach((city, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="name">${city?.city}, ${city?.state}</span>
        <span class="population">${numberWithCommas(city?.population)}</span>
      `;
      suggestionsList.appendChild(li);
    });
  }
});
