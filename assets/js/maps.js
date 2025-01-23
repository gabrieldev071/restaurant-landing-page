document.addEventListener("DOMContentLoaded", function () {
    // Configurar o mapa com a nova localização
    var map = L.map('mapid').setView([-7.214610720351064, -35.86284428576454], 13);

    // Adicionar o tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adicionar um marcador na nova localização
    var marker = L.marker([-7.214610720351064, -35.86284428576454]).addTo(map)
        .bindPopup('Nossa localização!')
        .openPopup();
});
