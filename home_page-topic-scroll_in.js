var topices_left = document.getElementsByClassName("scroll-left_in");
var topices_right = document.getElementsByClassName("scroll-right_in");

window.addEventListener("scroll",function(){
  // console.log( window.scrollY);
  for (let i=0; i<topices_right.length; i++){
    // console.log( topices_right[i].offsetTop);
    if( topices_right[i].offsetTop < window.scrollY){
    //   topices_right[i].style.opacity = '0';
    //   topices_right[i].style.right = '-100vw';
    // }else{
      topices_right[i].style.opacity = '1';
      topices_right[i].style.right = '0';
    }
    if( topices_left[i].offsetTop < window.scrollY){
    //   topices_left[i].style.opacity = '0';
    //   topices_left[i].style.left = '-100vw';
    // }else{
      topices_left[i].style.opacity = '1';
      topices_left[i].style.left = '0';
    };
  };
},false);