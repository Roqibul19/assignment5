// first card
document.getElementById('first-card').addEventListener('click',function(){
    const valueOfbString = document.getElementById('b-value');
    const valueOfhString = document.getElementById('h-value');
    const valueOfb=valueOfbString.value;
    const valueOfh= valueOfhString.value;

    const AreaTraingle= 0.5*parseFloat(valueOfb)*parseFloat(valueOfh);
    console.log(AreaTraingle)

    valueOfbString.value='';
    valueOfhString.value='';
    
})
// click and calling function for 2nd card
document.getElementById('second-card').addEventListener('click',function(){
    ariaRectangle= elementValues23('l-value','w-value');
    console.log(ariaRectangle);
    
    
})
// click and calling function for 3rd card
document.getElementById('3rd-card').addEventListener('click',function(){
   ariaParallelogram= elementValues23('parallelogram-b-value','parallelogram-h-value');
   console.log(ariaParallelogram);
})

// click and calling function for 4th card

document.getElementById('4th-card').addEventListener('click',function(){
    ariaRhombus= elementValues45('rhombus-d1-value','rhombus-d2-value');
    console.log(ariaRhombus);
 })
// click and calling function for 5th card

document.getElementById('5th-card').addEventListener('click',function(){
    ariaPentagon= elementValues45('Pentagon-p-value','Pentagon-b-value');
    console.log(ariaPentagon);
 })

