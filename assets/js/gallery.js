let images = document.querySelectorAll(".item");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

function closeBox(){
  lightbox.style.display = "none";
}

function nextImg(){
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prevImg(){
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function filter(category){
  images.forEach(img=>{
    if(category === "all"){
      img.style.display="block";
    }
    else{
      img.style.display = img.classList.contains(category) ? "block" : "none";
    }
  });
}

document.addEventListener("keydown",(e)=>{
  if(lightbox.style.display === "flex"){
    if(e.key === "Escape") closeBox();
    if(e.key === "ArrowRight") nextImg();
    if(e.key === "ArrowLeft") prevImg();
  }
});