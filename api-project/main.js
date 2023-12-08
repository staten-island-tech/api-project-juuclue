import '../styles/style.css';


 const URL = `https://valorant-api.com/v1/agents`;
 


  async function getData(URL){
    try {
        //requesiton a reseponse REST API's
        const response = await fetch(URL);
        if(response.status!= 200){
            console.log(URL);
            throw new Error(response.statusText);
        }

        const lala = await response.json();
        document.querySelector(".container").textContent = lala.data;
        console.log(lala);
        console.log(lala.data.name);

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

