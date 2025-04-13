let body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "flex-start";
let table = document.createElement("table");
table.style.border = "2px solid black";
let row;
for (let i = 0, count = 1; i < 3; i++) {
  row = document.createElement("tr");
  let col;
  for (let j = 0; j < 3; j++) {
    col = document.createElement("td");
    col.textContent = `I'm column ${count++}`;
    col.style.border = "1px solid black";
    col.style.padding = "10px";
    row.appendChild(col);
  }
  table.appendChild(row);
}
body.appendChild(table);

let button = document.createElement("button");
button.textContent = "Bring the mouse over me";
button.style.color = "white";
button.style.padding = "10px";
button.style.marginTop = "20px";
button.style.backgroundColor = "red";
button.onmouseover = function () {
  button.style.backgroundColor = "green";
};
body.appendChild(button);

let textArea = document.createElement("textarea");
textArea.style.backgroundColor = "lightgreen";
textArea.rows = 10;
textArea.cols = 30;
textArea.style.margin = "20px 0";
body.appendChild(textArea);

textArea.addEventListener("focus", function () {
  this.style.backgroundColor = "yellow";
});
let newDiv = document.createElement(`div`);
let inpField = document.createElement(`input`);
inpField.type = "text";
inpField.style.margin = "10px";
let inpButton = document.createElement(`button`);
inpButton.id = "inp-button";
inpButton.textContent = "click me twice";
newDiv.append(inpField, inpButton);
body.appendChild(newDiv);
textArea.addEventListener("change", function () {
  alert("greetings from this window, for moving out of the textbox");
});

let ul = document.createElement(`ul`);
ul.style.margin = "10px 0";
body.appendChild(ul);
inpButton.ondblclick = function () {
  let li = document.createElement(`li`);
  li.textContent = inpField.value;
  ul.appendChild(li);
};

newDiv = document.createElement(`div`);
let inpfield = document.createElement(`input`);
inpfield.style.margin = "10px";
let showCount = document.createElement(`input`);
showCount.readOnly = true;
showCount.style.width = "30px";
newDiv.append(inpfield, showCount);
body.appendChild(newDiv);

let count = 1;
inpfield.addEventListener("keyup", function () {
  showCount.value = count++;
});
