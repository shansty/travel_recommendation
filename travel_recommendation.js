const user_search = document.getElementById("btnSearch").value.toLowerCase();4
const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnReset");

function searchResult() {
const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('travel_recommendation.json')
      .then(response => response.json())
      .then(data => {
        if (user_search == 'beach') {
            data.beaches.forEach(beach => {
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p> ${beach.description}</p>`;
            });
          } else if (user_search == 'temple'){
            data.temples.forEach(temple => {
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p> ${temple.description}</p>`;
            })
        } else if(user_search == 'country') {
            data.countries.forEach(country => {
                resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                resultDiv.innerHTML += `<img src="${country.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p> ${country.description}</p>`;
            })
        } else {
            console.log("Error input")
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

function resetSearch() {
    document.getElementById("btnSearch").value = "";
}

btnSearch.addEventListener('click', searchResult);
btnClear.addEventListener('click', resetSearch);

