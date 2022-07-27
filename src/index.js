import validator from "./validator.js";

//let expDate = document.getElementById("fechaExpiracionTc");
//let cvv = document.getElementById("codigoVerificacion");
let btn = document.getElementById("validateTc");
let message;

/* let numeroTc = document.getElementById("numeroTc").value;
numeroTc.addEventListener("keyup", function(){

var maskifyNumber = validator.maskify(this.value)
document.getElementById("numeroTc").innerHTML = maskifyNumber
}),
 */

btn.onclick = () => {
/*     if (creditCardNumber.value == null || creditCardNumber.value == ' ') {
        alert("Ingresa un número de Tarjeta de Crédito");
    } else if (expDate.value == null || expDate.value == "") {
        alert("Ingresa la fecha de expiración de tú Tarjeta de Crédito");
    } else if (cvv.value == null || cvv.value == "") {
        alert("Ingresa el número de verificación");
    } else { */
        //validator.isValid(creditCardNumber);
        const creditCardNumber = document.getElementById("numeroTc").value;
        if (validator.isValid(creditCardNumber) === true) {
            message = "válida"
        } else {
            message = "inválida"
        }
        alert(`Su tarjeta ${creditCardNumber} es ${message}`);
    }
