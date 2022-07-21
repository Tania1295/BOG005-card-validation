import validator from './validator.js';
//console.log(validator);

var btn = document.getElementById("validateTc");
var creditCardNumber = document.getElementById("numeroTc");
var result;

btn.onclick = function almacenar(){
    creditCardNumber = creditCardNumber.value;
    validator.isValid(creditCardNumber);
    var result2 = validator.maskify(creditCardNumber);
    if(validator.isValid(creditCardNumber)==true){
        result = "valida"
    }else{
        result = "invalida"
    }
    alert("Su tarjeta " + result2 + "es" + result);
    return false;
}