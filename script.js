    function changeImage1(newImage, clickedButton) {
        const image = document.getElementById('main-image');
        image.src = newImage;

        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
          if (button !== clickedButton && button !== document.getElementById('leader2')) {
            button.style.display = 'none'; 
          }
        });

        clickedButton.style.display = 'none';

        const showAllButton = document.getElementById('leader2');
        showAllButton.style.display = 'inline-block';
      }
  
      function changeImage2(newImage) {
        const image = document.getElementById('main-image');
        image.src = newImage;

        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
          if (button !== document.getElementById('leader2')) {
            button.style.display = 'inline-block';
          }
        });

        const showAllButton = document.getElementById('leader2');
        showAllButton.style.display = 'none';
      }
      
      function togglePanel(infoPanel) {
        const panel = document.getElementById(infoPanel);
        
        // Alternar la visibilidad del panel
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
      const iframeContentHeight = iframe_lab1.contentWindow.document.body.scrollHeight; // Obtiene la altura del contenido del iframe
      container_lab1.style.height = iframeContentHeight + 'px';
    };
    iframe_lab2.onload = function () {
      const iframeContentHeight = iframe_lab2.contentWindow.document.body.scrollHeight; // Obtiene la altura del contenido del iframe
      container_lab.style.height = iframeContentHeight + 'px';
    };