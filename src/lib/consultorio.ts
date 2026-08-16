/**
 * Dados do consultorio em um lugar so: a faixa e o mapa do rodape leem daqui
 * para nao divergirem. Coordenadas conferidas na ficha do Google Maps.
 */
export const consultorio = {
  nome: "Marjana Dallagnol | Terapeuta Estrutural Sistêmica | Método RQE®",
  categoria: "Centro de bem-estar",
  rua: "R. Paissandu, 1254 — Petrópolis",
  cidade: "Passo Fundo/RS · 99051-240",
  lat: -28.2442964,
  lng: -52.3884158,
  nota: "4,9",
  avaliacoes: 27,
} as const;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Marjana Dallagnol Terapeuta Estrutural Sistêmica R. Paissandu 1254 Petrópolis Passo Fundo RS",
)}`;

/** bbox de ~1km em volta do ponto — zoom suficiente para reconhecer o quarteirão */
const d = { lat: 0.0035, lng: 0.005 };
export const osmEmbed =
  "https://www.openstreetmap.org/export/embed.html?bbox=" +
  [
    (consultorio.lng - d.lng).toFixed(4),
    (consultorio.lat - d.lat).toFixed(4),
    (consultorio.lng + d.lng).toFixed(4),
    (consultorio.lat + d.lat).toFixed(4),
  ].join("%2C") +
  `&layer=mapnik&marker=${consultorio.lat.toFixed(4)}%2C${consultorio.lng.toFixed(4)}`;
