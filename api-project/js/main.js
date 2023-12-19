import { DOMSelectors } from "./dom";


 const URL = `https://valorant-api.com/v1/agents`;
 


  async function getData(URL){
    try {
        //requesiton a reseponse REST API's
        const response = await fetch(URL);
        if(response.status!= 200){
            console.log(URL);
            throw new Error(response.statusText);
        }

        const object = await response.json();
        function insert(arr){
          arr.forEach((object) => {
             DOMSelectors.container.insertAdjacentHTML(
                "afterbegin",
                `<div class="card">
                <h2>${object.displayName}</h2>
                <img src ="${object.displayIcon}" alt="" class = "image">
                <h3>${object.description}</h3>
       
                </div>`
             )
          })
       };
       insert(object) 

    } catch(error) {
        console.log("error, uh oh");
        document.querySelector(".container").textContent ="baii";
    }

}
 getData(URL);  



/* async function getData() {
  let res = await fetch(

    "https://emojihub.yurace.pro/api/all"
  );
  let data = await res.json();
  console.log(data);
  data.results.forEach((all) => console.log(all));
}

getData(); */

