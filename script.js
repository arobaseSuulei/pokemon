



let btn=document.getElementById("btn");
let image=document.getElementById("img")
let nom=document.getElementById("name")
let id=document.getElementById("id")

const response=async()=>{

    let randomNumber=Math.ceil(Math.random()*150)+1
    let request = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`   

    // fetching data
    let data = await fetch(request)

    // convertir la reponse en json
    let response = await data.json()
    console.log(response)


    nom.textContent=response.name

    id.textContent=response.id
    image.src=response.sprites.front_default
}


response()

btn.addEventListener("click",response)


