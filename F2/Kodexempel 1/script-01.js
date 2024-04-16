window.addEventListener('load', loadData);

function loadData() {

  document.querySelector('#search-form').addEventListener('submit', handleSearchformSubmit);
  document.querySelector('#preloader').classList.add('d-none');

}

function handleSearchformSubmit(kalkon) {
  kalkon.preventDefault();

  let container = document.querySelector('#content');
  let preloader = document.querySelector('#preloader');

  preloader.classList.remove('d-none');
  let txtland = document.querySelector('#search').value;
  window.fetch('https://restcountries.com/v3.1/name/' + txtland)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);
      

      for(let i=0; i< data.length; i++) {

        let countryData = data[i];

        let card = document.createElement('div');
        card.className = 'card';
        card.style.maxWidth = '20rem';
        container.appendChild(card);

        let cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.src = countryData.flags.png;
        card.appendChild(cardImage)

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = countryData.name.official;
        cardBody.appendChild(cardTitle)

        let capital = document.createElement('p');
        capital.className = 'card-text';
        capital.innerHTML = '<b>Capital:</b> ' + countryData.capital;
        cardBody.appendChild(capital)

        let area = document.createElement('p');
        area.className = 'card-text';
        area.innerHTML = '<b>Area:</b> ' + countryData.area.toLocaleString('en') + ' km<sup>2</sup>';
        cardBody.appendChild(area);

        let population = document.createElement('p');
        population.className = 'card-text';
        population.innerHTML = '<b>Population:</b> ' + countryData.population.toLocaleString('en');
        cardBody.appendChild(population);
    }
      preloader.classList.add('d-none');

    });

}
