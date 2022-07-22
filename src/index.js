import validator from './validator.js';
let btn = document.getElementById("validateTc");
//var creditCardNumber = document.getElementById("numeroTc");
let result;

btn.onclick = function almacenar(){
    let creditCardNumber = document.getElementById("numeroTc").value;
//    creditCardNumber = creditCardNumber.value;
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
    if(validator.isValid(creditCardNumber) == true){
        result = "válida"

    }else{
        result = "inválida"
    }
    alert("Su tarjeta " + " " + creditCardNumber + " es " + result);
    return false;
}