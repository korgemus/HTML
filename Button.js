
//const button2 = document.getElementById('tryClick');
//var flag1 = 0;
const button2 = document.querySelector('#tryClick')

const random = (min,max) => {
    const random = min + Math.random() * (max - min + 1);
    return Math.floor(random); 
}

button2.addEventListener('mouseenter',() =>{
    button2.style.left =  `${random(0,90)}%`;
    button2.style.top =  `${random(0,90)}%`;
}); 

/*function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function butRun(){
  document.body.style.backgroundColor = "#aec3eb";
  button2.style.top = 100;
  button2.style.margin = 200;
}
onmouseover.button1 = butRun;*/