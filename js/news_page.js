function nothing_happen(e) {
  e.stopPropagation(); //阻斷蔓延
}

function switch_light() {
  //燈箱開關
  document.getElementById("light_off").classList.toggle("on");
  // 燈箱叉叉
  $("head").append(`<style>#light_off::before,#light_off::after{ bottom: calc(50% - ${$("#light_off > div").outerHeight() / 2}px); }</style>`);
}

window.addEventListener(
  "load",
  function () {
    fetch("json/tags.json")
      .then((res) => {
        return res.json();
      })
      .then((taglist) => {
        const tags = document.getElementById("tags");
        const ul = document.createElement("ul");
        for (const item in taglist) {
          const li = document.createElement("li");
          const input = document.createElement("input");
          input.id = "tag" + item;
          input.type = "checkbox";
          const label = document.createElement("label");
          label.htmlFor = "tag" + item;
          label.innerText = taglist[item];
          li.append(input);
          li.append(label);
          ul.append(li);
        }
        tags.append(ul);
      });
    // 燈箱
    document.getElementById("open").addEventListener("click", switch_light, false);
    document.getElementById("light_off").addEventListener("click", switch_light, false);
    document.querySelector(".writings").addEventListener("click", nothing_happen, false);
  },
  false
);
