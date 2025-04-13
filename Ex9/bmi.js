function calcBMI(){
    let weight = Number(document.getElementById("weight").value);
    let feet = Number(document.getElementById('feet').value);
    let inch = Number(document.getElementById('inches').value);
    
    let bmi = (703 * weight / ((feet * 12 + inch) ** 2)).toFixed(3);
    document.getElementById('bmi').value = bmi;
    document.querySelectorAll('.hidden').forEach(element => {
        element.classList.remove("hidden");
    });
}