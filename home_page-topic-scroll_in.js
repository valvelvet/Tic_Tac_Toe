var topices_left = document.getElementsByClassName("scroll-left_in");
var topices_right = document.getElementsByClassName("scroll-right_in");

window.addEventListener("scroll",function(){
  console.log( window.scrollY);
  for (let i=0; i<topices_right.length; i++){
    console.log( topices_right[i].offsetTop);
    if( topices_right[i].offsetTop +(topices_right[i].clientHeight)/2 > window.scrollY){
      topices_right[i].style.opacity = '0';
      topices_right[i].style.right = '-100vw';
    }else{
      topices_right[i].style.opacity = '1';
      topices_right[i].style.right = '0';
    };
  };
  for (let j=0; j<topices_left.length; j++){
    if( topices_left[j].offsetTop +(topices_left[j].clientHeight)/2 > window.scrollY){
      topices_left[j].style.opacity = '0';
      topices_left[j].style.left = '-100vw';
    }else{
      topices_left[j].style.opacity = '1';
      topices_left[j].style.left = '0';
    };
  };
},false);