

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
      
      function togglePanel() {
        const panel = document.getElementById('infoPanel');
        
        // Alternar la visibilidad del panel
        if (panel.classList.contains('visible')) {
          panel.classList.remove('visible'); // Ocultar
        } else {
          panel.classList.add('visible'); // Mostrar
        }
      }