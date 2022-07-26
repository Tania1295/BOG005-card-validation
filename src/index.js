import validator from "./validator.js";

//let expDate = document.getElementById("fechaExpiracionTc");
//let cvv = document.getElementById("codigoVerificacion");
let creditCardNumber = document.getElementById("numeroTc").value;
let btn = document.getElementById("validateTc");
let valido;

btn.onclick = () => {
/*     if (creditCardNumber.value == null || creditCardNumber.value == ' ') {
        alert("Ingresa un número de Tarjeta de Crédito");
    } else if (expDate.value == null || expDate.value == "") {
        alert("Ingresa la fecha de expiración de tú Tarjeta de Crédito");
    } else if (cvv.value == null || cvv.value == "") {
        alert("Ingresa el número de verificación");
    } else { */
        validator.isValid(creditCardNumber);
        //let verificacion = validator.maskify(creditCardNumber);
        if (validator.isValid(creditCardNumber) == true) {
            valido = "válida"
        } else {
            valido = "inválida"
        }
        alert(`Su tarjeta ${creditCardNumber} es ${valido}`);
        return false;
    }
//}

const numeroTc = document.getElementById("numeroTc").value;
creditCardNumber.addEventListener("keyup", function(event){
const creditCardNumber = event.currentTarget.value;
numeroTc.textContent = maskify(creditCardNumber)
})


