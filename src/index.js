/* eslint-disable no-undef */
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
        //alert("Ingresa el nombre del titular");
        Swal.fire("Ingresa", "el nombre del titular", "warning");
    } else if (creditCardNumber.value == null || creditCardNumber.value == "") {
       //alert("Ingresa el número de tarjeta de crédito");
        Swal.fire("Ingresa", "el número de tarjeta de crédito", "warning");
    } else if (expDate.value == null || expDate.value == "") {
        //alert("Ingresa fecha de expiración de tarjeta de crédito");
        Swal.fire("Ingresa", "fecha de expiración de tarjeta de crédito", "warning");
    } else if (cvv.value == null || cvv.value == "") {
        //alert("Ingrese número de verificación de tarjeta de crédito");
        Swal.fire("Ingrese", "número de verificación de tarjeta de crédito", "warning");
    } else if (mail.value == null || mail.value == "") {
        //alert("Ingrese su correo electrónico");
        Swal.fire("Ingrese", "su correo electrónico", "warning");
    } else {
        if (validator.isValid(creditCardNumber.value) === true) {
            message = "válida"
            Swal.fire("Su tarjeta " + validator.maskify(creditCardNumber.value) + " es " + message, "success")
        } else {
            message = "inválida"
            Swal.fire("Su tarjeta " + validator.maskify(creditCardNumber.value) + " es " + message, "error")
        }
        //alert("Su tarjeta " + validator.maskify(creditCardNumber.value) + " es " + message);
    }
})