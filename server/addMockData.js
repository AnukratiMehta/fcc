const fetch = require('node-fetch');

const url = 'http://localhost:5001/courses/add-mock-data'; // Update the URL as needed

fetch(url, { method: 'POST' })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error adding mock data:', error));
