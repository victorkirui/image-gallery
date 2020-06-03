const current = document.querySelector('.current img');
const images = document.querySelectorAll('.imgs img');
const opacity = 0.4 ; 

//Set first image opacity
images[0].style.opacity = 0.4 ;

//LOOP THROUGH THE IMAGES NODELIST 
images.forEach(img => img.addEventListener('click',changeCurrentImg));

function changeCurrentImg(e){
  //set current image to the image that was clicked  on
  current.src = e.target.src ;

  //Add fade in animation
  current.classList.add('fade-in');

  //Remove fade in class after 0.5 seconds
  setTimeout(()=>current.classList.remove('fade-in'),500);

  //remove opacity of each image after it was clicked
  images.forEach( img => img.style.opacity = 1 );
  
  //set opacity of the clicked image
  e.target.style.opacity = opacity;
}



