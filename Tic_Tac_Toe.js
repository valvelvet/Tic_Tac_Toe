let lattice = document.getElementById('lattice');
let lattice_btn = document.querySelectorAll('#lattice input');
let start_btn = document.getElementById('reset_lattice');
let reset_btn = document.querySelector('#reset_lattice img');
let i = 8;

function lock_all(){
  let unlock = document.querySelectorAll("#lattice input:not(:disabled)");
  for(let j=0;j<unlock.length;j++){
    unlock[j].disabled = "true";
  }
  start_btn.innerHTML = '<img src="pic/undo-circular-arrow.png">';
  start_btn.style.transform = "translate(calc(-50% + 140px),65px)";
  reset_btn = document.querySelector('#reset_lattice img');
  i = 8;
  return;
};

function my_turn(e){
  start_btn.innerHTML = '';
  i--;
  i--;
  //玩家落子
  if(e.target.tagName=="INPUT"){
    e.target.value = "O";
    e.target.disabled = "true";

    // 判斷輸贏
    rc00 = document.getElementById("rc00").value;
    rc01 = document.getElementById("rc01").value;
    rc02 = document.getElementById("rc02").value;
    rc10 = document.getElementById("rc10").value;
    rc11 = document.getElementById("rc11").value;
    rc12 = document.getElementById("rc12").value;
    rc20 = document.getElementById("rc20").value;
    rc21 = document.getElementById("rc21").value;
    rc22 = document.getElementById("rc22").value;
    if( rc00!=" " && rc01!=" " && rc02!=" " && rc00==rc01 && rc01==rc02){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc10!=" " && rc11!=" " && rc12!=" " && rc10==rc11 && rc11==rc12){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc20!=" " && rc21!=" " && rc22!=" " && rc20==rc21 && rc21==rc22){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc00!=" " && rc10!=" " && rc20!=" " && rc00==rc10 && rc10==rc20){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc01!=" " && rc11!=" " && rc21!=" " && rc01==rc11 && rc11==rc21){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc02!=" " && rc12!=" " && rc22!=" " && rc02==rc12 && rc12==rc22){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc02!=" " && rc11!=" " && rc20!=" " && rc02==rc11 && rc11==rc20){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc00!=" " && rc11!=" " && rc22!=" " && rc00==rc11 && rc11==rc22){
      alert("遊戲結束，恭喜獲勝");
      lock_all();
      return;
    };
    if( rc00!=" " && rc01!=" " && rc02!=" " && rc10!=" " && rc11!=" " && rc12!=" " && rc20!=" " && rc21!=" " && rc22!=" "){
      alert("跟電腦平手?");
      lock_all();
      return;
    };

    // 電腦落子
    computer_turn = document.querySelectorAll('#lattice input:not(:disabled)')[parseInt(Math.random()*i)];
    // console.log(i);
    computer_turn.value = "X";
    computer_turn.disabled = "true";
  
    // 判斷輸贏
    rc00 = document.getElementById("rc00").value;
    rc01 = document.getElementById("rc01").value;
    rc02 = document.getElementById("rc02").value;
    rc10 = document.getElementById("rc10").value;
    rc11 = document.getElementById("rc11").value;
    rc12 = document.getElementById("rc12").value;
    rc20 = document.getElementById("rc20").value;
    rc21 = document.getElementById("rc21").value;
    rc22 = document.getElementById("rc22").value;
    if( rc00!=" " && rc01!=" " && rc02!=" " && rc00==rc01 && rc01==rc02){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
    if( rc10!=" " && rc11!=" " && rc12!=" " && rc10==rc11 && rc11==rc12){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
    if( rc20!=" " && rc21!=" " && rc22!=" " && rc20==rc21 && rc21==rc22){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
    if( rc00!=" " && rc10!=" " && rc20!=" " && rc00==rc10 && rc10==rc20){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
    if( rc01!=" " && rc11!=" " && rc21!=" " && rc01==rc11 && rc11==rc21){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
    if( rc02!=" " && rc12!=" " && rc22!=" " && rc02==rc12 && rc12==rc22){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
    if( rc02!=" " && rc11!=" " && rc20!=" " && rc02==rc11 && rc11==rc20){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
    if( rc00!=" " && rc11!=" " && rc22!=" " && rc00==rc11 && rc11==rc22){
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    };
  };
};



window.addEventListener("load",function(){
  lattice.addEventListener("click",my_turn,false);
  console.log(reset_btn);
  start_btn.addEventListener("click",function(){
    for(let k=0;k<lattice_btn.length;k++){
      lattice_btn[k].disabled = "";
      lattice_btn[k].value = " ";
    };
    start_btn.innerHTML = '';
    return;
  },false);
},false);
