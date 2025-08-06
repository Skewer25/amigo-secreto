// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = []

function agregarAmigo(nombre) {
    // Verifica si el nombre es una cadena de texto no vacía
  nombre = document.getElementById('amigo').value;
  if (typeof nombre === 'string' && nombre.trim() !== '') {
    listaDeAmigos.push(nombre);
  } else {
    alert('Por favor, inserte un nombre.');
  }
  limpiarCaja();
  mostrarLista();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarLista() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = ''; //limpiar la lista antes de mostrar

    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Crear un elemento <li> para cada amigo
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
  // Verifica si hay al menos dos amigos en la lista antes de sortear
    if (listaDeAmigos.length < 2) {
        alert('Debe haber al menos dos amigos para sortear.');
        return;
    }
    // Genera un índice aleatorio para seleccionar un amigo de la lista
    let indiceAmigo = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAmigo];
    document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
  }
