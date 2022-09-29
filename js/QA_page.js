window.addEventListener(
  "load",
  function () {
    fetch("json/QA.json")
      .then((res) => {
        return res.json();
      })
      .then((QAList1) => {
        const qa_list = document.getElementById("qa_list");
        const helfQA = Math.round(QAList1.length / 2);
        const QAList0 = QAList1.splice(0, helfQA);
        const QACol0 = document.createElement("div");
        QACol0.classList.add("col-12");
        QACol0.classList.add("col-md-6");
        const QACol1 = document.createElement("div");
        QACol1.classList.add("col-12");
        QACol1.classList.add("col-md-6");
        for (const item in QAList0) {
          const QA = document.createElement("div");
          QA.classList.add("question");
          const input = document.createElement("input");
          input.type = "checkbox";
          input.name = "Q";
          input.id = "Q0" + item;
          const label = document.createElement("label");
          label.htmlFor = "Q0" + item;
          const h3 = document.createElement("h3");
          h3.textContent = QAList0[item].title;
          label.append(h3);
          const p = document.createElement("p");
          p.innerHTML = QAList0[item].info;
          QA.append(input);
          QA.append(label);
          QA.append(p);
          QACol0.append(QA);
        }
        for (const item in QAList1) {
          const QA = document.createElement("div");
          QA.classList.add("question");
          const input = document.createElement("input");
          input.type = "checkbox";
          input.name = "Q";
          input.id = "Q1" + item;
          const label = document.createElement("label");
          label.htmlFor = "Q1" + item;
          const h3 = document.createElement("h3");
          h3.textContent = QAList1[item].title;
          label.append(h3);
          const p = document.createElement("p");
          p.innerHTML = QAList1[item].info;
          QA.append(input);
          QA.append(label);
          QA.append(p);
          QACol1.append(QA);
        }
        qa_list.append(QACol0);
        qa_list.append(QACol1);
      });
  },
  false
);
