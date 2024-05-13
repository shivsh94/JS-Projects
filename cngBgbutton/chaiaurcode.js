const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
       color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

};

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        const color = e.currentTarget.dataset.color
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='Random'){
            body.style.backgroundColor = randomColor();
        }
    });   
    
});