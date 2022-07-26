/* eslint-disable no-unused-vars */
const validator = {
  isValid: (creditCardNumber) => {
    let arr = creditCardNumber.split("").reverse(); //Separar el array en elementos individuales, revertirlo
    let suma = 0;
    console.log('arr inicia', arr);

    //Función para realizar multiplicación posiciones pares
    const numPositionPar = [];
    for (let i = 0; i < arr.length; i++) {
      const datos = parseInt(arr[i])
      i % 2 != 0 ? numPositionPar.push(datos * 2) : numPositionPar.push(datos)
    }

    console.log('paso 1', numPositionPar)

    // A las posiciones pares de numPositionPar que sean mayores a 9 restarle 9
    for (let i = 0; i < numPositionPar.length; i = i + 2) {
      if (numPositionPar[i] > 9) {
        numPositionPar[i] = numPositionPar[i] - 9
      }
    }

    console.log('paso 2', numPositionPar)

    if (suma % 10 === 0) {
      return true;
    }
  },
  //Función para ocultar los números de la TC
  maskify: (creditCardNumber) => {
if (creditCardNumber.length >4){
  const numeros = creditCardNumber.split("")
  for(let init = 0; init < numeros.length - 4; init++){
numeros[init] = "#"
  }
  return numeros.join("")
}else{
  return creditCardNumber
}
},
}
export default validator