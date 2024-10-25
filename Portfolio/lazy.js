// lazyLoadImages.js
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img');
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          imageObserver.unobserve(image);
        }
      });
    });
  
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  });
  