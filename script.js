function cambioPiso(newImage, grupoActual, siguienteGrupo) {
  const image = document.getElementById('main-image');
  image.src = newImage;

  const grupoActualElement = document.getElementById(grupoActual);
  const siguienteGrupoElement = document.getElementById(siguienteGrupo);

  console.log(`Ocultando grupo: ${grupoActual}`);
  grupoActualElement.classList.add('piso-2'); // Ocultar grupo actual

  console.log(`Mostrando grupo: ${siguienteGrupo}`);
  siguienteGrupoElement.classList.remove('piso-2'); // Mostrar siguiente grupo

  console.log(`Imagen cambiada a: ${newImage}`);
}


function togglePanel(infoPanel) {
  const panel = document.getElementById(infoPanel);

  // Alternar visibilidad del panel
  if (panel.classList.contains('visible')) {
    panel.classList.remove('visible'); // Ocultar
  } else {
    panel.classList.add('visible'); // Mostrar
  }
}

    const iframe_lab1 = document.getElementById('iframe-lab1');
    const container_lab1 = document.getElementById('infoPanel1');
    const iframe_lab2 = document.getElementById('iframe-lab2');
    const container_lab2 = document.getElementById('infoPanel2');

    // Ajusta el tamaño del contenedor automáticamente
    iframe_lab1.onload = function () {
      const iframeContentHeight = iframe_lab1.contentWindow.document.body.scrollHeight;
      container_lab1.style.height = iframeContentHeight + 'px';
    };
    iframe_lab2.onload = function () {
      const iframeContentHeight = iframe_lab2.contentWindow.document.body.scrollHeight;
      container_lab.style.height = iframeContentHeight + 'px';
    };