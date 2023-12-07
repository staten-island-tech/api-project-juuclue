import './style.css'


const URL = `https://emojihub.yurace.pro/api/all`;


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

    } catch (error) {
        console.log("error", "uh oh");
        document.querySelector(".container").textContent ="baii";
    }
}
getData(URL); 

