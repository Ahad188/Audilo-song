
          const slideshowElements = document.querySelectorAll(".slide-element");

          //console.log(slideElements);
               let count = 1;
          setInterval(() => {
               count++;
               let currentElements = document.querySelector(".current");

               currentElements.classList.remove("current");

               if(count>slideshowElements.length){
                    slideshowElements[0].classList.add("current");

               }else{
                     currentElements.nextElementSibling.classList.add("current")
               }
               
               
          }, 1000);



           
  /*
          const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;

setInterval(() => {
  countElements++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (countElements > slideshowElements.length) {
    slideshowElements[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 3000);
  
  */ 

















/*const slideShowElement=document.querySelectorAll(".slide-element");
//console.log(slideShowElement);
let countElement=1;
setInterval(() => {
     countElement++;
     let curentElement= document.querySelector(".current");

     curentElement.classList.remove("current");

     if(countElement>slideShowElement){
          slideShowElement[0].classList.add("current")
     }else(){
          curentElement.nextElementSibling.add("current");
     }

     
     
}, 2000);*/