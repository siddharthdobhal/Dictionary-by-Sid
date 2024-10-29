// Select elements
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");

// Function to fetch word definition
function fetchWordDefinition(word) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error("Word not found");
      return response.json();
    })
    .then(data => {
      displayResult(data[0]);
    })
    .catch(error => {
      resultsContainer.innerHTML = `<p class="text-danger">Definition not found. Please try another word.</p>`;
      console.error("Error fetching word definition:", error);
    });
}

// Function to display the result
function displayResult(data) {
  const { word, meanings } = data;
  const definition = meanings[0].definitions[0].definition;
  const example = meanings[0].definitions[0].example || "No example available.";

  resultsContainer.innerHTML = `
    <h2>Word: ${word}</h2>
    <p><strong>Definition:</strong> ${definition}</p>
    <p><strong>Example:</strong> ${example}</p>
  `;
}

// Event listener for form submission
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchWordDefinition(searchTerm);
  } else {
    resultsContainer.innerHTML = `<p class="text-warning">Please enter a word to search.</p>`;
  }
});

div.sec 
