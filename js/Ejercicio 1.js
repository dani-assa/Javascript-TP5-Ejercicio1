/* 
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

let generarNro;

const juego = () => {
  generarNro = getRandomArbitrary(1, 101);
  console.log(generarNro);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const adivinarNro = (e) => {
  e.preventDefault();
  let inputNro = document.querySelector('#inputNro').value;
  console.log(inputNro);
  if (generarNro == inputNro) {
    alert('Adivino el número magico')
  } else if (inputNro > generarNro) {
    alert('Te equivocaste 😣, el número mágico es menor que el ingresado');
  } else {
    alert('Te equivocaste 😣, el número mágico es mayor que el ingresado');
  }
}

document.getElementById('comenzarJuego').addEventListener('click', juego);
document.getElementById('enviar').addEventListener('click', adivinarNro);
