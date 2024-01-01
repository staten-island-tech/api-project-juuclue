import "./style.css"
import { DOMSelectors } from "./dom";
const URL = `https://date.nager.at/api/v3/`;
async function getData (URL, endpoint){
  try {
  const response = await fetch (`${URL}${endpoint}`);
  if (response.status !=200){
  throw new Error (response.statusText);
  }
  const data = await response.json();
  function insertCards(arr){
    arr.forEach((data) => {
  DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <h2 class="name">${data.name}</h2>
        <h3 class="countryCode">${"countryCode: "+data.countryCode}</h3>
      </div>`
  )})};
  insertCards(data)

  data.forEach(data => {console.log(data.name)
  });
  }
  catch (error) {
  console.log(error, "uhohhhhh")
  document.querySelector("h2").textContent = "no";
}
}
getData (URL, "AvailableCountries");


function search(){
  DOMSelectors.form.addEventListener("submit", function(event)
  {
    event.preventDefault();
    const poop = DOMSelectors.searchname.value
    if (poop){
      const daisy = URL+"NextPublicHolidays/"+poop;
    async function lala(){   
      try{
      const response = await fetch(daisy)
      const sunflower = await response.json();
      console.log(sunflower)
      function card(data){
        data.forEach((countryCode)=>       DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <h2 class="name">${countryCode.name}</h2>
        </div>`
        )) 
}
      card(sunflower);
    } 
    catch(error){
      
    console.error(error)}}
    lala()
    clear()

    }
    clearfields()
  })
}
search()

function clear(){
  DOMSelectors.container.innerHTML = "";
}
function clearfields(){
  DOMSelectors.searchname.value = "";
}
function clearh2(){
  DOMSelectors.h2.innerHTML = "";
}

/* DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  clear()
  let x = DOMSelectors.searchname.value
  const husky = `https://date.nager.at/api/v3/NextPublicHolidays/${x}`
  async function getData (husky){
    try{
      const response = await fetch (husky);
      if (response.status !=200){
        throw new Error (response.statusText);
  }
  const data = await response.json();
  function insertCards(arr){
    arr.forEach((data) => {
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `div class="card">
        <h2 class="breed"> ${data.name}</h2>
        <h3 class="personality">${"temperament: "+data.temperament}</h3>
        <h3 class="lifespan">${"lifespan: "+data.lifespan}</h3>
        <h3 class="weightlbs">${"Weight(lbs): "+data.weightlbs}</h3>
        <h3 class="heighinches">${"Height(in): "+data.heightInches}</h3>
        </div>`
      )
    })
  }
  insertCards(data)

  }
  catch (error) {
    console.log(error, "nah")
    document.querySelector("h2").textContent = "hmmmm";
    DOMSelectors.form.addEventListener("submit", function(event){
      event.preventDefault();
      clearh2()
    })
  }
  }
  getData(husky)
}); */