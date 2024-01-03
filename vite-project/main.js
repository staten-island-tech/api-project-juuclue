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
  document.querySelector("h1").textContent = "no";
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


