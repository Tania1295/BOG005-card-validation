const validator = {
  isValid,
  maskify,
};
//Inicio función isValid
function isValid(creditCardNumber) {
  //  debugger;
/*   if (creditCardNumber === '') {
    return false;
  } */
  //Separa el string en elementos individuales y revierte el mismo
  let arr = creditCardNumber.toString().split("").reverse();
  let sum = 0;
  // console.log("arr inicial", arr);

  //Función para realizar multiplicación posiciones pares
  const positionNumber = [];
  for (let i = 0; i < arr.length; i++) {
    const newNumbers = parseInt(arr[i])
    i % 2 != 0 ? positionNumber.push(newNumbers * 2) : positionNumber.push(newNumbers)
  }
  //console.log('paso 1', positionNumber)

  // A las posiciones pares de positionNumber que sean mayores a 9 restarle 9
  for (let i = 0; i < positionNumber.length; i++) {
    if (positionNumber[i] > 9) {
      positionNumber[i] = positionNumber[i] - 9
    }
    // console.log("paso 2", positionNumber)
// Sum es igual a la suma de todos los nuevos números
    sum += positionNumber[i]
    //console.log("paso 3", suma)
  }
  //console.log(sum)
  // Se realiza el residuo o modulo de la suma que sea igual a 0
  if (sum % 10 === 0) {
    return true;
  } else {
    //console.log("Entre aquí")
    return false
  }
}
//Inicio de función enmascarar número Tarjeta de Crédito
function maskify(creditCardNumber) {
  if (creditCardNumber.length > 4) {
    const numbers = creditCardNumber.split("")
    for (let init = 0; init < numbers.length - 4; init++) {
      numbers[init] = "#"
    }
    return numbers.join("")
  } else {
    return creditCardNumber
  }
}

export default validator