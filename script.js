
(async()=>{
  let urlCountry="https://restcountries.eu/rest/v2/all";
  let urlNbu="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

  let country = await fetch(urlCountry);
  let nbu = await fetch(urlNbu);

  country=await  country.json();
  nbu = await nbu.json();

  country= country.map(item => ({
      name : item.name,
      flag: item.flag,
      code: item.currencies[0].code
  }));

  let nbu_mass={ };

  nbu.forEach(item =>{
    nbu_mass[item.cc]={
      name1:item.txt,
      rate:item.rate,
      date: item.exchangedate
    }
  });

  nbu=nbu_mass;

  country.forEach(item =>{
    if(nbu[item.code]){
      item.rate= nbu[item.code].rate;
      item.name1= nbu[item.code].name1;
      item.date=nbu[item.code].date;
    }
  });

country = country.filter(item => item.rate);
console.log(country);
  let html= country.map(danni=>`
      <content class="content">
        <img src="${danni.flag}" alt="flag" width="150px">
        <h2 class="country">${danni.name}</h2>
        <h2 class="valuta">${danni.name1}</h2>
        <h2>
          курс: <h2class="kurs">${danni.rate}</h2>
        </h2>
        <h2> на </h2>
        <h2 class="data">${danni.date}</h2>
    </content>

  `);

html = html.join('');
let infoContry = document.querySelector('.block0');
infoContry.insertAdjacentHTML('afterbegin',html);

})();


 
