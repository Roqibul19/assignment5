// first card
let serial=1;
document.getElementById('first-card').addEventListener('click',function(){
    const valueOfbString = document.getElementById('b-value');
    const valueOfhString = document.getElementById('h-value');
    const valueOfb=valueOfbString.value;
    const valueOfh= valueOfhString.value;
    valueOfbString.value='';
    valueOfhString.value='';
    

    // background color change randomly
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
        }
    
    random_bg_color();
    

    //   validation
    if(valueOfb<0 || valueOfh<0 || isNaN(valueOfb) || isNaN(valueOfh) || valueOfb=='' || valueOfh==''){
        alert('Plz give valid number');
        return;
    }
    const Area= 0.5*parseFloat(valueOfb)*parseFloat(valueOfh);
    
    const Name=geometryNames('name1');
    displayData(Name, Area);

    serial=serial+1;
})
// click and calling function for 2nd card
document.getElementById('second-card').addEventListener('click',function(){
    Area= elementValues23('l-value','w-value');
    const Name=geometryNames('name2');
    displayData(Name, Area);
    
    // background color change randomly
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
        }
    
    random_bg_color();

    serial=serial+1;
    
})
// click and calling function for 3rd card
document.getElementById('3rd-card').addEventListener('click',function(){
   Area= elementValues23('parallelogram-b-value','parallelogram-h-value');
   const Name=geometryNames('name3');
   displayData(Name, Area);
   
   // background color change randomly
   function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();

   serial=serial+1;
})

// click and calling function for 4th card

document.getElementById('4th-card').addEventListener('click',function(){
    Area= elementValues45('rhombus-d1-value','rhombus-d2-value');
    const Name=geometryNames('name4');
    displayData(Name, Area);
    
    // background color change randomly
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
        }
    
    random_bg_color();

    serial =serial + 1;
 })
// click and calling function for 5th card

document.getElementById('5th-card').addEventListener('click',function(){
    Area= elementValues45('Pentagon-p-value','Pentagon-b-value');
    const Name=geometryNames('name5');
    displayData(Name, Area);
    
    // background color change randomly
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
        }
    
    random_bg_color();

    serial = serial + 1;
 })

//  6th or last card

document.getElementById('6th-card').addEventListener('click',function(){
    const valueOfaStringCard6 = document.getElementById('Ellipse-a-value');
    const valueOfbStringCard6 = document.getElementById('Ellipse-b-value');
    const valueOfaCard6=valueOfaStringCard6.innerText;
    const valueOfbCard6= valueOfbStringCard6.innerText;

    const Area= (3.14*parseFloat(valueOfaCard6).toFixed(2)*parseFloat(valueOfbCard6)).toFixed(2);
    const Name=geometryNames('name6');
    displayData(Name, Area);
    
    // background color change randomly
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
        }
    
    random_bg_color();
    
    serial=serial+1;
 });


//  blog part
document.getElementById('my-blog').addEventListener('click',function(){
    window.location.href='blog.html';
})


