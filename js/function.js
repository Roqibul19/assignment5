// common function for 2nd and 3rd card
function elementValues23(value1,value2){
    const cardValue1String=document.getElementById(value1);
    const cardValue2String= document.getElementById(value2);
    const cardValue1=cardValue1String.value;
    const cardValue2= cardValue2String.value;
    
    cardValue1String.value='';
    cardValue2String.value='';
    // Card two and three validation
    if(cardValue1<0 || cardValue2<0 || isNaN(cardValue1) || isNaN(cardValue2) || cardValue1=='' || cardValue2==''){
        alert('Plz give valid number');
        return;
    }
    
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

// function for names
function geometryNames(geoName){
    const geometryName= document.getElementById(geoName).innerText;
    return geometryName;
}

// function for display data
function displayData(Name,Area){
    const calculationContainer=document.getElementById('calculation-container');
    const sectionn= document.createElement('section');
    sectionn.innerHTML= `
    <td>${serial}.</td> 
    <td class="tab-name">${Name} </td> 
    <td>${Area} </td> 
    <button class="button-mitre">Convert to m<sup>2</sub></button>
    `;
    calculationContainer.appendChild(sectionn);


}