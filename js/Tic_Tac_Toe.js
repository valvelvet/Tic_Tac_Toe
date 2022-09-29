let lattice = document.getElementById("lattice");
let lattice_btn = document.querySelectorAll("#lattice input");
let start_btn = document.getElementById("reset_lattice");
let i = 8;

function winnerGift() {
  switch_light();
  let gift = parseInt(Math.random() * 7) + 1;
  $("#light_off .feedback .pic").html(`<img src="pic/gift-0${gift}.png" alt="">`);
}

function lock_all() {
  let unlock = document.querySelectorAll("#lattice input:not(:disabled)");
  for (let j = 0; j < unlock.length; j++) {
    unlock[j].disabled = "true";
  }
  start_btn.style.background = `url("pic/undo_circle.png") no-repeat center/cover`;
  start_btn.style.transform = "translate(calc(-50% + 130px),95px)";
  i = 8;
  return;
}

function my_turn(e) {
  start_btn.style.animation = 0;
  i--;
  i--;
  //玩家落子
  if (e.target.tagName == "INPUT") {
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
    if (
      (rc00 != " " && rc01 != " " && rc02 != " " && rc00 == rc01 && rc01 == rc02) ||
      (rc10 != " " && rc11 != " " && rc12 != " " && rc10 == rc11 && rc11 == rc12) ||
      (rc20 != " " && rc21 != " " && rc22 != " " && rc20 == rc21 && rc21 == rc22) ||
      (rc00 != " " && rc10 != " " && rc20 != " " && rc00 == rc10 && rc10 == rc20) ||
      (rc01 != " " && rc11 != " " && rc21 != " " && rc01 == rc11 && rc11 == rc21) ||
      (rc02 != " " && rc12 != " " && rc22 != " " && rc02 == rc12 && rc12 == rc22) ||
      (rc02 != " " && rc11 != " " && rc20 != " " && rc02 == rc11 && rc11 == rc20) ||
      (rc00 != " " && rc11 != " " && rc22 != " " && rc00 == rc11 && rc11 == rc22)
    ) {
      winnerGift();
      lock_all();
      return;
    }
    if (rc00 != " " && rc01 != " " && rc02 != " " && rc10 != " " && rc11 != " " && rc12 != " " && rc20 != " " && rc21 != " " && rc22 != " ") {
      alert("跟電腦平手?");
      lock_all();
      return;
    }

    // 電腦落子
    computer_turn = document.querySelectorAll("#lattice input:not(:disabled)")[parseInt(Math.random() * i)];
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
    if (
      (rc00 != " " && rc01 != " " && rc02 != " " && rc00 == rc01 && rc01 == rc02) ||
      (rc10 != " " && rc11 != " " && rc12 != " " && rc10 == rc11 && rc11 == rc12) ||
      (rc20 != " " && rc21 != " " && rc22 != " " && rc20 == rc21 && rc21 == rc22) ||
      (rc00 != " " && rc10 != " " && rc20 != " " && rc00 == rc10 && rc10 == rc20) ||
      (rc01 != " " && rc11 != " " && rc21 != " " && rc01 == rc11 && rc11 == rc21) ||
      (rc02 != " " && rc12 != " " && rc22 != " " && rc02 == rc12 && rc12 == rc22) ||
      (rc02 != " " && rc11 != " " && rc20 != " " && rc02 == rc11 && rc11 == rc20) ||
      (rc00 != " " && rc11 != " " && rc22 != " " && rc00 == rc11 && rc11 == rc22)
    ) {
      alert("遊戲結束，居然輸給電腦??");
      lock_all();
      return;
    }
  }
}

function nothing_happen(e) {
  e.stopPropagation(); //阻斷蔓延
}

function switch_light() {
  document.getElementById("light_off").classList.toggle("on");
}

window.addEventListener(
  "load",
  function () {
    lattice.addEventListener("click", my_turn, false);
    start_btn.addEventListener(
      "click",
      function () {
        for (let k = 0; k < lattice_btn.length; k++) {
          lattice_btn[k].disabled = "";
          lattice_btn[k].value = " ";
        }
        start_btn.style.background = "";
        return;
      },
      false
    );
    document.getElementById("light_off").addEventListener("click", switch_light, false);
    document.querySelector(".feedback").addEventListener("click", nothing_happen, false);
  },
  false
);
