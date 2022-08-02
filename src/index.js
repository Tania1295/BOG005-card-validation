import validator from "./validator.js";

const name = document.getElementById("nameUser");
const expDate = document.getElementById("expirationDateTc");
const cvv = document.getElementById("verificationCode");
const mail = document.getElementById("emailBuyer");
const creditCardNumber = document.getElementById("numTc");
let message;

document.getElementById("formTc").addEventListener("submit", function (e) {
    e.preventDefault();
    if (name.value == null || name.value == "") {
        alert("Ingresa el nombre del titular");
        //swal("Ingresa", "el nombre del titular", "warning");
    } else if (creditCardNumber.value == null || creditCardNumber.value == "") {
        alert("Ingresa el número de tarjeta de crédito");
        // swal("Ingresa", "el número de tarjeta de crédito", "warning");
    } else if (expDate.value == null || expDate.value == "") {
        alert("Ingresa fecha de expiración de tarjeta de crédito");
        //swal("Ingresa", "fecha de expiración de tarjeta de crédito", "warning");
    } else if (cvv.value == null || cvv.value == "") {
        alert("Ingrese número de verificación de tarjeta de crédito");
        //swal("Ingrese", "número de verificación de tarjeta de crédito", "warning");
    } else if (mail.value == null || mail.value == "") {
        alert("Ingrese su correo electrónico");
        // swal("Ingrese", "su correo electrónico", "warning");
    } else {
        validator.isValid(creditCardNumber.value);
        if (validator.isValid(creditCardNumber) === true) {
            message = "válida"
        } else {
            message = "inválida"
        }
        alert("Su tarjeta " + validator.maskify(creditCardNumber.value) + " es " + message);
    }
})