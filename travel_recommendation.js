const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnReset");

function searchResult() {
    const user_search = document.getElementById("searchResult").value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        console.dir({data, user_search})
        if (user_search == 'beach') {
            data.beaches.forEach(beach => {
                console.dir({beach})
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                resultDiv.innerHTML += `<img src="${beach.imageUrl}">`;
                resultDiv.innerHTML += `<p> ${beach.description}</p>`;
            });
          } else if (user_search == 'temple'){
            data.temples.forEach(temple => {
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                resultDiv.innerHTML += `<img src="${temple.imageUrl}">`;
                resultDiv.innerHTML += `<p> ${temple.description}</p>`;
            })
        } else if(user_search == 'country') {
            const randomNumber = getRandomNumber(1, 3);
            data.countries[randomNumber].cities.forEach(city => {
                resultDiv.innerHTML += `<h2>${city.name} </h2>`;
                resultDiv.innerHTML += `<img src="${city.imageUrl}">`;
                resultDiv.innerHTML += `<p> ${city.description}</p>`;
            })
        } else {
            console.log("Error input")
        }
      })
      .catch(error => {
        console.error(error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

function resetSearch() {
    document.getElementById("searchResult").value = "";
    document.getElementById('result').innerHTML = "";
    console.log(resultDiv)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnSearch.addEventListener('click', searchResult);
btnClear.addEventListener('click', resetSearch);

