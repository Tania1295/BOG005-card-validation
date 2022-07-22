const validator = {
  isValid: function (creditCardNumber) {
    // let numberTcredito = document.getElementById("numeroTc").value
    //Separar el array en elementos individuales
    let arr = creditCardNumber.split("").reverse().join("");
    let suma = 0;

    //Se reversa el array (cambia posiciones)
    //arr.reverse();

    //Función para realizar multiplicación posiciones pares y suma para números mayores de 10, la const guardarNumeros almacena los datos ingresados
    const guardarNumeros = [];

    for (let i = 1; i <= arr.length; i += 2) {
      if (arr[i] < 5) {
        guardarNumeros.push(arr[i] * 2);
      } else {
        guardarNumeros.push((arr[i] - 5) * 2 + 1);
      }
    }
    //Función para verificar el resultado de la suma que sea producto igual a 0, v = valor obtenido en guardarNumeros
    for (let v = 0; v < guardarNumeros.length; v++) {
      suma += Number(guardarNumeros[v]);
    }
    if (suma % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  //Función para ocultar los números de la TC
  maskify: function (creditCardNumber) {
    var bloque = "#";
    var hideTcNumber = creditCardNumber.slice(0, -4).replace(/./g, bloque) +
      ("" + creditCardNumber.slice(-4));
  },
};
export default validator;
