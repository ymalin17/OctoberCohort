let searchInput = document.querySelector(".search-box input");
let images = document.querySelectorAll(".image-box");
let lightbox = document.querySelector(".lightbox");
let closeButton = document.querySelector(".closeBtn");

searchInput.addEventListener("keyup", (e) => {
  
  if (e.key == "Enter") {
    
    let value = searchInput.value;
   
    searchValue = value.toLowerCase();
    console.log("search value is",searchValue)

   
    images.forEach((image) => {
      let movie = image.dataset.name.toLowerCase();
      console.log(" movie name is",movie);
     
      if (searchValue === movie) {
        console.log("hello")
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
  }
});

searchInput.addEventListener("keyup", () => {
  
  if (searchInput.value != "") return;


  images.forEach((image) => {
    image.style.display = "block";
  });
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    showLightBox(image.querySelector("img").src);
  });
});




const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});






