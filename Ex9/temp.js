let arr = [55,62,68,74,59,45,41,58,60,67,65,78,82,88,91,92,90,93,87,80,78,79,72,68,61,59,55,65];
let n = arr.length;

let hot = cold = pleasant = 0;

arr.forEach(element => {
    (element>=85)?hot++:(element<60)?cold++:pleasant++;
});

let hotDays = document.getElementById("hot");
let pleasantDays = document.getElementById("pleasant");
let coldDays = document.getElementById("cold");

hotDays.textContent = hot;
pleasantDays.textContent = pleasant;
coldDays.textContent = cold;


// let tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];
let tableBody = document.querySelector("#table tbody");
tableBody.innerHTML = ''; //clear the table


let row,cell;
arr.forEach((temp)=>{
    row = document.createElement("tr");
    cell = document.createElement("td");
    cell.innerHTML = temp+"ºF";
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = (temp>=85)?"Hot":(temp<60)?"Cold":"Pleasant";
    row.appendChild(cell);
    tableBody.appendChild(row);
})