// Q23: Country-State-City Dropdown using AJAX and DOM manipulation

// These variables store the dropdown elements so we can update them using JavaScript.
const countrySelect = document.getElementById("countrySelect");
const stateSelect = document.getElementById("stateSelect");
const citySelect = document.getElementById("citySelect");
const message = document.getElementById("message");

// This variable will store all country, state and city data after AJAX loads data.json.
let locationData = {};

// Fallback data keeps the program working even if the file is opened directly without localhost.
// Some browsers block AJAX requests to data.json when opened using file:/// path.
const fallbackData = {
    India: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
        Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
        Goa: ["Panaji", "Margao", "Vasco da Gama"]
    },
    USA: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Houston", "Dallas", "Austin"]
    },
    UAE: {
        Dubai: ["Deira", "Jumeirah", "Bur Dubai"],
        "Abu Dhabi": ["Al Ain", "Mussafah", "Khalifa City"]
    }
};

// This function adds options inside a dropdown.
function fillDropdown(selectElement, defaultText, values) {
    selectElement.innerHTML = `<option value="">${defaultText}</option>`; // Clears old options first.

    values.forEach(function (value) {
        const option = document.createElement("option"); // Creates one option tag.
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option); // Adds the option inside the dropdown.
    });
}

// This function loads data.json using XMLHttpRequest, which is the AJAX part of this practical.
function loadLocationData() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "data.json", true); // GET request fetches predefined JSON data without page refresh.

    xhr.onload = function () {
        // Status 200 means data.json was loaded successfully from localhost/live server.
        if (xhr.status === 200) {
            locationData = JSON.parse(xhr.responseText); // Converts JSON text into JavaScript object.
            fillDropdown(countrySelect, "Select Country", Object.keys(locationData));
            message.textContent = "";
        } else {
            useFallbackData(); // Runs if the JSON file is not loaded.
        }
    };

    xhr.onerror = function () {
        useFallbackData(); // Runs if AJAX fails due to file path or browser restriction.
    };

    try {
        xhr.send(); // Sends AJAX request.
    } catch (error) {
        useFallbackData(); // Keeps the program working if browser blocks local AJAX.
    }
}

// This function is only for backup, so the program still works by double-clicking index.html.
function useFallbackData() {
    locationData = fallbackData;
    fillDropdown(countrySelect, "Select Country", Object.keys(locationData));
    message.textContent = "Using local backup data. For actual AJAX loading, run this folder on localhost or Live Server.";
}

// onchange event: when country changes, states are loaded dynamically.
countrySelect.onchange = function () {
    const selectedCountry = countrySelect.value;

    // Reset state and city dropdowns whenever country changes.
    fillDropdown(stateSelect, "Select State", []);
    fillDropdown(citySelect, "Select City", []);
    stateSelect.disabled = true;
    citySelect.disabled = true;

    if (selectedCountry === "") {
        message.textContent = "Please select a country.";
        return;
    }

    if (!locationData[selectedCountry]) {
        message.textContent = "No states found for this country.";
        return;
    }

    const states = Object.keys(locationData[selectedCountry]); // Gets all states of selected country.
    fillDropdown(stateSelect, "Select State", states);
    stateSelect.disabled = false;
    message.textContent = "";
};

// onchange event: when state changes, cities are loaded dynamically.
stateSelect.onchange = function () {
    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;

    fillDropdown(citySelect, "Select City", []);
    citySelect.disabled = true;

    if (selectedState === "") {
        message.textContent = "Please select a state.";
        return;
    }

    if (!locationData[selectedCountry][selectedState]) {
        message.textContent = "No cities found for this state.";
        return;
    }

    const cities = locationData[selectedCountry][selectedState]; // Gets all cities of selected state.
    fillDropdown(citySelect, "Select City", cities);
    citySelect.disabled = false;
    message.textContent = "";
};

// Program starts here by loading JSON data through AJAX.
loadLocationData();
