
(async()=>{
  let results = await Promise.all([
  fetch("https://restcountries.eu/rest/v2/all"),
  fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
]);
 console.log(results);
  results = await results.json();
  let html= results.map(danni=>`

      <content class="content">
        <img src="${danni.flag}" alt="flag" width="150px">
        <h2 class="country">${danni.name}</h2>
        <h2 class="valuta">${danni.currencies.name}</h2>
        <h2>
          курс: <h2class="kurs">${danni.rate}</h2>
        </h2>
        <h2> на </h2>
        <h2 class="data">${danni.exchangedate}</h2>
    </content>

  `);

html = html.join('');
let infoContry = document.querySelector('.block0');
infoContry.insertAdjacentHTML('afterbegin',html);

})();

