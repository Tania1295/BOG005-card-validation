import validator from './validator.js';
console.log("creditCardNumber");

var btn = document.getElementById("validateTc");
//var creditCardNumber = document.getElementById("numeroTc");
var result;

btn.onclick = function almacenar(){
    var creditCardNumber = document.getElementById("numeroTc").value;
//    creditCardNumber = creditCardNumber.value;
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
    if(validator.isValid(creditCardNumber) == true){
        result = "válida"
        console.log("result");
    }else{
        result = "inválida"
    }
    alert("Su tarjeta " + " " + creditCardNumber + " es " + result);
    return false;
}