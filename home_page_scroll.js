window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 200){
    document.getElementById("more_topic").style.display = "block";
  }else{
    document.getElementById("more_topic").style.display = "none";
  };
},false);