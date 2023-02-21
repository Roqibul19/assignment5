// common function for 2nd and 3rd card
function elementValues23(value1,value2){
    const cardValue1String=document.getElementById(value1);
    const cardValue1=cardValue1String.value;
    const cardValue2String= document.getElementById(value2);
    const cardValue2= cardValue2String.value;

    cardValue1String.value='';
    cardValue2String.value='';

    return parseFloat(cardValue1)*parseFloat(cardValue2);


}
// common function for 4th and 5th card
function elementValues45(value1,value2){
    const cardValue1String=document.getElementById(value1);
    const cardValue1= cardValue1String.innerText;
    const cardValue2String=document.getElementById(value2);
    const cardValue2= cardValue2String.innerText;

    return 0.5*parseFloat(cardValue1)*parseFloat(cardValue2);
  
}