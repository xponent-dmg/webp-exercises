let seats = new Array(10);
fir = eco = 1;
let flightClass,seatNo;

function submitDet(){
    let myName = document.getElementById("name").value;
    document.getElementById("name").value="";
    let type = document.getElementById("type").value;
    document.getElementById("type").value="";

    if(myName === '' || type === ''){
        alert("Enter all the details and try again!");
        return;
    }

    if(type == 1){
        firstClass();
    }
    else if(type == 2){
        ecoClass();
    }
    changeVal("ticket-name",myName);
    changeVal("seat-no",seatNo);
    changeVal("ticket-class",flightClass);
    document.querySelector(".boarding-pass").classList.remove("hidden");
    
}

function changeVal(id,data){
    document.getElementById(id).textContent = data;
}

function firstClass(){
    if(fir !== 5){
        flightClass = "First class";
        seats[fir-1] = 1;
        seatNo = fir;
        fir++;
    }
    else{
        if(window.confirm("First class seats are full, would you like to switch to Economy?")){
            ecoClass();
        }
        else{
            alert(`Coudn't process your ticket as seats are not available.`)
        }
    }
}

function ecoClass(){
    if(eco !== 5){
        flightClass = "Economy";
        seats[5+eco-1] = 1;
        seatNo = 5+eco;
        eco++;
    }
    else{
        if(window.confirm("Economy seats are full, would you like to switch to First class?")){
            firstClass();
        }
        else{
            alert(`Coudn't process your ticket as seats are not available.`);
        }
    }
}



