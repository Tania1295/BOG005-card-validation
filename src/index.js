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

        Swal.fire({
            title: "Ingrese",
            text: "el nombre del titular",
            icon: "warning",
            confirmButtonColor: "#679975",
        });
    } else if (creditCardNumber.value == null || creditCardNumber.value == "") {
        Swal.fire({
            title: "Ingrese",
            text: "el número de tarjeta de crédito",
            icon: "warning",
            confirmButtonColor: "#679975",
        });
    } else if (expDate.value == null || expDate.value == "") {
        Swal.fire({
            title:"Ingrese",
            text:"fecha de expiración de tarjeta de crédito",
            icon: "warning",
            confirmButtonColor: "#679975",
        });
    } else if (cvv.value == null || cvv.value == "") {
        Swal.fire({
            title:"Ingrese",
        text:"número de verificación de tarjeta de crédito",
        icon: "warning",
        confirmButtonColor: "#679975",
    });
    } else if (mail.value == null || mail.value == "") {
        Swal.fire({
            title:"Ingrese",
            text:"su correo electrónico",
            icon:"warning",
            confirmButtonColor: "#679975",
        });
    } else {
        if (validator.isValid(creditCardNumber.value) === true) {
            message = "válida"
            Swal.fire({
                title: "Su tarjeta" + validator.maskify(creditCardNumber.value),
                text: "es " + message,
                icon: "success",
                confirmButtonText: "Continuar",
                confirmButtonColor: "#679975",
            })
        } else {
            message = "inválida"
            Swal.fire({
                title: "Su tarjeta" + validator.maskify(creditCardNumber.value),
                text: "es " + message,
                icon: "error",
                confirmButtonText: "Regresar",
                confirmButtonColor: "#679975",
            })
        }
    }
})