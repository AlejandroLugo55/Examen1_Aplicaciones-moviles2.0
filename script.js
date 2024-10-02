fetch('https://jsonplaceholder.typicode.com/photos?_limit=10') 
  .then(response => response.json())
  .then(photos => {
    const gallery = document.getElementById('gallery');
    
    photos.forEach(photo => {
      
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      galleryItem.innerHTML = `
        <img src="${photo.thumbnailUrl}" alt="${photo.title}">
        <p>${photo.title}</p>
      `;

      galleryItem.addEventListener('click', () => {
        window.open(photo.url, '_blank');
      });

      gallery.appendChild(galleryItem);
    });
  })
  .catch(error => console.error('Error:', error));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch(error => {
      console.log('Error en el registro del Service Worker:', error);
    });
}
