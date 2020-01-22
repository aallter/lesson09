
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

//// async and await
/*(async function(){

  async function sum(a,b){
      return a+b;
    }

  let result = await sum(6,8);
})();*/

/////////////////////////////////////Вывод только 27 ячейки массива , с получением и ожидания до вызова функции

/*let url1='https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20191222&json';
let url2='https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20191215&json';
(async function(){

  let arr=[];
  for(let i=1; i<=30;i++){
let day= i > 9 ? i: '0' + i;

    arr.push(`https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=201912${day}&json`);
  }

  let time = performance.now();

  arr=arr.map(url => fetch(url));
  arr=await Promise.all(arr);

  arr=arr.map(item=> item.json());
  arr=await Promise.all(arr);

arr.forEach(item => console.log(item[27]));
  console.log("Time",Math.round(performance.now()-time));


  let result1 =  fetch(url1);
  let result2 =  fetch(url2);

  result1 = await result1;
  result2 = await result2;

  result1 = await result1.json();
  result2 = await result2.json();

  console.log(result1);
  console.log(result2);

})();*/
///////////////////////////////////////////


/////Цикл 6 евейт
/*(async function(){

  let arr=[];
  for(let i=1; i<=30;i++){
let day= i > 9 ? i: '0' + i;

    arr.push(`https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=201912${day}&json`);
  }

  arr=arr.map(item => fetch(item));

  for await(let item of arr){

    console.log(item);
  }
})();
*/


/////Юнит Тестирование

/*function sum(a=0,b=0){
  a=+a;
  b=+b;
  return a+b;
}

(function sumTest(){
  /*let control=sum(5,7);
  if(control==12){
    console.log("sum(5,7)-OK!");
  }else{
    console.log("sum(5,7)-FAIL!");
  }*/
/*  console.assert(sum(5,7)=== 12,"sum(5,7)");
  console.assert(sum() ===0,"Unit: sum() //no params");
  console.assert(sum('5','10')===15 ,"Unit: sum('5','10')");
})();*/

///// object

/*let ob={
  name:"Ivan",
  lastName:"Smith",
  age: 33,
  toString:function(){
      return `My name is ${this.name} ${this.lastName}`;
  },
  valueOf:function(){
    return this.age;
  }
}

console.log(+ob);*/


///////////////////  DATA  /////////////////////////
/*let now= new Date();
let bday=new Date(2001,1,21,1,1,1);

let diff=now-bday;

console.log("Days",Math.round(diff/1000/60/60/24));*/

/*console.log("Year:",now.getFullYear());
console.log("Hours:",now.getHours());
console.log("Offset",now.getTimezoneOffset());
console.dir(now);*/

/*let newYear2020=new Date(2020,0,1,0,0,0);

console.dir(now);
console.log("date:",newYear2020);*/


////////// exersice POCHTA ////////////
/*(async function(){

  let url='https://api.novaposhta.ua/v2.0/json/ ';
  let cityA='fc5f1e3c-928e-11e9-898c-005056b24375';
let cityB='72311a28-9e58-11e9-898c-005056b24375';
  let params= {
   "modelName": "InternetDocument",
   "calledMethod": "getDocumentPrice",
   "methodProperties": {
      "CitySender": cityA,
      "CityRecipient": cityB,
      "Weight": "10",
      "ServiceType": "DoorsDoors",
      "Cost": "1000",
      "CargoType": "Cargo",
      "SeatsAmount": "1",
      "RedeliveryCalculate": {
         "CargoType": "Money",
         "Amount": "100"
      }
   },
   "apiKey": "44e91d173783612570185e7b41eea14c"
}

  let result = await fetch(url,{
    method:"POST",
    body:JSON.stringify(params)
  });

result= await result.json();

//result=result.data.filter(item=>item.DescriptionRu.indexOf('Днепр')>=0);

console.log(result);

})();*/
