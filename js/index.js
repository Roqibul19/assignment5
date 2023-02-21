// first card
document.getElementById('first-card').addEventListener('click',function(){
    const valueOfb = document.getElementById('b-value').value;
    const valueOfh = document.getElementById('h-value').value;

    const AreaTraingle= 0.5*parseFloat(valueOfb)*parseFloat(valueOfh);
    console.log(AreaTraingle)
    
})
// click and calling function for 2nd card
document.getElementById('second-card').addEventListener('click',function(){
    firstCardArea= elementValues('l-value','w-value');
    console.log(firstCardArea);
    
    
})

