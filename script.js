
let btn = document.getElementById('btn2')

btn.addEventListener('click',()=>{
  let exit = confirm("Do you want to leave?")
});

let main = document.querySelector('#main')
let images = document.querySelectorAll('.images img')
let imageindex = 0;
 
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    imageIndex = index;
    main.src = image.src;
  });
});

let imageIndex = 0;
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    main.src = images[imageIndex].src;
  }
  else if (event.code === "ArrowRight") {
    imageIndex = (imageIndex + 1 + images.length) % images.length;
    main.src = images[imageIndex].src;
  }
});

let bg = document.body
let but = document.getElementById('btn2')

document.addEventListener('keydown', function(event){
  if (event.code === "ArrowUp"){
    bg.style.background = "black"
    but.style.background = "white"
    but.style.color = "black"
  }
  else if (event.code === "ArrowDown"){
    bg.style.background = "white"
    but.style.background = "black"
    but.style.color = "white"
  }
})

// document.addEventListener('keydown', function(event){
// if (event.code === "ArrowUp"){
//   bg.style.background = "white"
// }
// else if (bg.style.background = "white"){
//   bg.style.background = "black"
// }
// })
