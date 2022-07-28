import validator from "./validator.js";

const btn = document.getElementById("validateTc");
const name = document.getElementById("nameUser");
const expDate = document.getElementById("expirationDateTc");
const cvv = document.getElementById("verificationCode");
const mail= document.getElementById("emailBuyer");
const creditCardNumber = document.getElementById("numTc").value;
let message;
let maskifyNumber = validator.maskify;

btn.onclick = () => {
    if (name !== null && name !== "") {
        alert("Ingresa el nombre del titular");
    } else if (creditCardNumber == null && creditCardNumber == "") {
        alert("Ingresa el número de Tarjeta de Crédito");
    } else if (expDate.value == null || expDate.value == "") {
        alert("Ingresa fecha de expiración de Tarjeta de Crédito");
    } else if (cvv.value == null || cvv.value == "") {
        alert("Ingrese número de verificación de Tarjeta de Crédito");
    }else if (mail.value == null || mail.value == "") {
        alert("Ingrese su correo electronico");
     }else {
        validator.isValid(creditCardNumber.value);
        const creditCardNumber = document.getElementById("numTc").value;
        if (validator.isValid(creditCardNumber) === true) {
            message = "válida"
        } else {
            message = "inválida"
        }
        alert("Su tarjeta" + maskifyNumber + creditCardNumber + "es " + message);
    }
}