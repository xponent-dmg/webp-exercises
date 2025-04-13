class Patient{
    constructor(pid,name,age) {
        this.pid = pid;
        this.name = name;
        this.age = age;
    }
}

let patients = [
    new Patient(1,"Alen",39),
    new Patient(2,"Deena",47),
    new Patient(3,"Diana",21),
    new Patient(4,"Jack",54),
    new Patient(5,"Jain",23),
    new Patient(6,"Kelvin",61),
    new Patient(7,"Louis",69),
    new Patient(8,"Rex",49),
]
function displayTable(){
    let tbody = document.querySelector(`#descTable`);
    tbody.textContent = '';
    patients.forEach(elem => makeRow(tbody,elem));
    document.querySelector("#desc").classList.remove("hidden");

}
displayTable();
let patientsCopy = [...patients];

function makeRow(tbody, elem){
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.textContent = elem.pid;
        row.appendChild(col);
        col = document.createElement("td");
        col.textContent = elem.name;
        row.appendChild(col);
        col = document.createElement("td");
        col.textContent = elem.age;
        row.appendChild(col);
        tbody.appendChild(row);
}

function sortDescAge(){
    patientsCopy.sort((a,b) => b.age-a.age);
    let tbody = document.querySelector(`#descTable`);
    tbody.textContent = '';
    patientsCopy.forEach(elem => makeRow(tbody,elem));
    document.querySelector("#desc").classList.remove("hidden");
}

function searchPID(){
    let pidSearch = document.getElementById(`pid-search`).value;
    let found = patients.find(elem => elem.pid == pidSearch);
    if (!found){
        console.log("Searched element not found");
    }
    else{
        console.log(`Patient record:\n\nPID:${found.pid}\nName: ${found.name}\nAge: ${found.age}`);
    }
}

function filterByAge(){
    let minAge = document.querySelector("[name='min-age']").value;
    let maxAge = document.querySelector("[name='max-age']").value;
    let tbody = document.querySelector("#filterTable");
    tbody.textContent = '';
    patients.forEach(elem => {
        if(elem.age >= minAge && elem.age <= maxAge){
            makeRow(tbody,elem);
        }
    })
    document.querySelector("#filter").classList.remove("hidden");
}