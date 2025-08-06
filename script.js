let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;

  currentIndex = Array.from(images).findIndex(image => image.src === img.src);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  let allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach(img => {
    img.style.display = (category === 'all' || img.classList.contains(category)) ? "block" : "none";
  });
}
