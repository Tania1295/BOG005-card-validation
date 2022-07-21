const validator ={
     isValid: function (creditCardNumber) {
       var numberTc = new Array ();
       var suma = 0;
       var total;
       var validate;
       //Separar el array en elementos individuales
       numberTc = creditCardNumber.split("");
       numberTc.reverse();

       for(var i =1; i< numberTc.length ; i += 2){
        if(numberTc[i]<5){
            numberTc[i] = numberTc [i] * 2;
        }
        else
       {
        numberTc[i]= ((numberTc[i]- 5)* 2) + 1;
       }
    }
    for (var j =0; j< numberTc.length; j++){
        suma += Number(numberTc[j]);

        total= suma % 10;

        validate = total == 0;

        return validate;
    }
    },
maskify: function(creditCardNumber){
    var bloque = "#";
    var hideTcNumber =(creditCardNumber.slice(0, -4).replace(/./g, bloque)+("" + creditCardNumber.slice(-4)));
}
};
export default validator;