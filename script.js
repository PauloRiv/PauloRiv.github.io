import L, { bounds } from 'leaflet';
import 'Leaflet/leaflet/dist/leaflet.css';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dimensiones de la imagen (en píxeles)
const imageWidth = 1000; // Ancho de la imagen
const imageHeight = 800; // Alto de la imagen

// Crear el mapa
const map = L.map('map', {
  crs: L.CRS.Simple, // Coordenadas simples
  minZoom: -2, // Permite alejarse
});

// Coordenadas de la esquina inferior izquierda y superior derecha
const bounds = [[0, 0], [imageHeight, imageWidth]];

// Cargar la imagen del mapa personalizado
const imageUrl = 'assets/laboratorio_computo.png'; // Ruta relativa a la imagen
L.imageOverlay(imageUrl, bounds).addTo(map);

// Ajustar la vista inicial para mostrar toda la imagen
map.fitBounds(bounds);

// Añadir un marcador en el mapa
L.marker([400, 500]) // Coordenadas relativas dentro de la imagen
  .addTo(map)
  .bindPopup('Aquí hay un marcador personalizado.')
  .openPopup();