 const randomColor = function(){
     const hex = '0123456789ABCDEF';
     let color = '#';
     for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
     }
     return color;

 };
let intervalID;
 const startChangingColor = function(){
     function changeBgColor(){
         document.body.style.backgroundColor = randomColor();
     }
    if(!intervalID){
        intervalID = setInterval(changeBgColor, 1000);
    }

 };
 const stopChangingColor= function(){
    // console.log('stop');
    clearInterval(intervalID);
    intervalID = null;
    
 };

  document.querySelector("#Start").addEventListener('click', startChangingColor);
  document.querySelector("#Stop").addEventListener('click', stopChangingColor);