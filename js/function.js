// function for 2nd and 3rd card
function elementValues(value1,value2){
    const cartdValue1=document.getElementById(value1).value;
    const cardValue2= document.getElementById(value2).value;
    return parseFloat(cartdValue1)*parseFloat(cardValue2);
}