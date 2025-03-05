/* Funcion Cambiar a negro  */

function cambiarfondo() {
  this.style.backgroundColor = "black";
}
document.getElementById("caja1").addEventListener("click", cambiarfondo);
document.getElementById("caja2").addEventListener("click", cambiarfondo);
document.getElementById("caja3").addEventListener("click", cambiarfondo);
document.getElementById("caja4").addEventListener("click", cambiarfondo);

/* Funcion Cambiar con las Letras a s d*/

document.addEventListener("keydown", (event) => {
  const div = document.getElementById("miDiv");

  switch (
    event.key.toLowerCase() // Convertimos la tecla a minúscula para evitar distinción
  ) {
    case "a":
      div.style.backgroundColor = "pink";
      break;
    case "s":
      div.style.backgroundColor = "orange";
      break;
    case "d":
      div.style.backgroundColor = "skyblue";
      break;
    default:
      div.style.backgroundColor = "blue"; // Color por defecto
      break;
  }
});

document.addEventListener("keydown", (event) => {
  const div = document.getElementById("miDiv2");

  switch (
    event.key.toLowerCase() // Convertimos la tecla a minúscula para evitar distinción
  ) {
    case "q":
      div.style.backgroundColor = "pink";
      break;
    case "w":
      div.style.backgroundColor = "orange";
      break;
    case "e":
      div.style.backgroundColor = "skyblue";
      break;
    default:
      div.style.backgroundColor = "blue"; // Color por defecto
      break;
  }
});

document.addEventListener("keydown", (event) => {
  const contenedor = document.getElementById("contenedor");
  let nuevoDiv = null;

  switch (event.key.toLowerCase()) {
    case "q":
      nuevoDiv = document.createElement("div");
      nuevoDiv.className = "nuevoDiv";
      nuevoDiv.style.backgroundColor = "purple";
      nuevoDiv.textContent = "Q";
      break;
    case "w":
      nuevoDiv = document.createElement("div");
      nuevoDiv.className = "nuevoDiv";
      nuevoDiv.style.backgroundColor = "grey";
      nuevoDiv.textContent = "W";
      break;
    case "e":
      nuevoDiv = document.createElement("div");
      nuevoDiv.className = "nuevoDiv";
      nuevoDiv.style.backgroundColor = "brown";
      nuevoDiv.textContent = "E";
      break;
  }

  if (nuevoDiv) {
    contenedor.appendChild(nuevoDiv);
  }
});
