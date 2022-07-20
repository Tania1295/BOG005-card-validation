const validator = {
  // ...
isValid: function ValidateSomething(){
    // Check if your textbox is empty
    if(document.getElementById('example-textbox').value.length == 0){
         alert("Your textbox is empty. Please type something...");
         document.getElementById('example-textbox').focus();
         return false;
    }
    else{
         // Everything is valid
         alert('Your form is valid! (Do something)');
         return true;
    }
}
};
export default validator;
