const validator ={
     isValid: function (creditCardNumber) {
       var numberTc = new Array ();
       var suma = 0;

    //Separar el array en elementos individuales
       numberTc = creditCardNumber.split();
       console.log(typeof creditCardNumber);
       //Se reversa el array el último es el primero el primero es el último
       numberTc.reverse();
       //Función para realizar multiplicación posiciones pares y suma para números mayores de 9, la const guardarNumeros almacena los datos ingresados
       const guardarNumeros = [ ]
       for(var i = 1; i < numberTc.length ; i += 2){
        if(numberTc[i]<5){
            guardarNumeros.push(numberTc [i] * 2)
        }
        else
       {
        guardarNumeros.push(((numberTc[i]- 5)* 2) + 1)
       }
    }
    //Función para verificar el resultado de la suma que sea producto igual a 0, v = valor obtenido en guardarNumeros
    for (var v =0; v < guardarNumeros.length; v++){
        suma += Number(guardarNumeros[v]);
    }
    if (suma % 10 === 0){
        return true;
    } else{
        return false;
    }
    },
    //Función para ocultar los números de la TC
maskify: function(creditCardNumber){
    var bloque = "#";
    var hideTcNumber =(creditCardNumber.slice(0, -4).replace(/./g, bloque)+("" + creditCardNumber.slice(-4)));
}
};
export default validator;