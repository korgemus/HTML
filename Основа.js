
var button1 = document.getElementById('theme');
var button2 = document.getElementById('images');
var button3 = document.getElementById('main');
var flag1 = 0;

function changeColor(){
  if(flag1 == 0){
    document.body.style.backgroundColor = "#deb887";
    flag1 = 1; 
  }
  else
  {
    document.body.style.backgroundColor = "#aec3eb";
    flag1 = 0; 
  }
}

function newPage(button){
  if(button == '2'){
    window.open('/Основа_Картинки.html','_self',false)
  }
  if (button == '1') {
    window.open('/Основа.html','_self',false)
  } 

}

button1.onclick = changeColor;
