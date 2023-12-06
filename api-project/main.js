import './style.css'


const URL = `https://api.genshin.dev/`;


 async function getData(URL){
    try {
        //requesiton a reseponse REST API's
        const response = await fetch(URL);
        if(response.status!= 200){
            console.log(URL);
            throw new Error(response.statusText);
        }

        const data = await response.json();
        document.querySelector("h1").textContent = data.content;

    } catch (error) {
        console.log(error, "uh oh");
        document.querySelector("h1").textContent ="baii";
    }
}
getData(URL); 

