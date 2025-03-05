


document.addEventListener('keydown', (event) => {
    const contenedor = document.getElementById('contenedor');
    let nuevoDiv = null;
    
    switch (event.key.toLowerCase()) {
      case 'q':
        nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'nuevoDiv';
        nuevoDiv.style.backgroundColor = 'red';
        nuevoDiv.textContent = 'Q';
        break;
      case 'w':
        nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'nuevoDiv';
        nuevoDiv.style.backgroundColor = 'green';
        nuevoDiv.textContent = 'W';
        break;
      case 'e':
        nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'nuevoDiv';
        nuevoDiv.style.backgroundColor = 'blue';
        nuevoDiv.textContent = 'E';
        break;
    }

    if (nuevoDiv) {
      contenedor.appendChild(nuevoDiv);
    }
  });