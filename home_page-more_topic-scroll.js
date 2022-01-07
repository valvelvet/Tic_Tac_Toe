window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 1000){
    document.getElementById("more_topic").style.display = "block";
  }else{
    document.getElementById("more_topic").style.display = "none";
  };
},false);