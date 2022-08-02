const validator = {
  isValid,
  maskify,
};
//Inicio función isValid
function isValid(creditCardNumber) {
  //  debugger;
  if (creditCardNumber === '') {
    return false;
  }
  let arr = creditCardNumber.toString().split("").reverse(); //Separar el array en elementos individuales, revertirlo
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

    sum += positionNumber[i]
    //console.log("paso 3", suma)
  }
  if (sum % 10 === 0) {
    return true;
  } else {
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