const colors = ["brown","red", "green", "rgb(158, 240, 240)" ,"#c2da6f", "white"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color")

btn.addEventListener("click", changeColor = () =>{
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})
// el Math.floor es para escoger el primer numero y descartar el resto
const getRandomNumber = () => {return Math.floor(Math.random() * colors.length)};
// para crear un numero alazar dependiendo de la cantidad de colors 