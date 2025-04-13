function calcTotal(){
    adult = parseInt(document.getElementById("adult").value);
    child = parseInt(document.getElementById("child").value);
    total = 10*adult+5*child;
   document.getElementById("total").value = "₹ "+total;

}