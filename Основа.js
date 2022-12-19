
var button1 = document.getElementById('theme');
var button2 = document.getElementById('images');
var button3 = document.getElementById('main');


function changeColor(){
  if ((localStorage.getItem('themes') == "#aec3eb")||(localStorage.getItem('themes') == null)){
    document.body.style.backgroundColor = "#deb887";
    localStorage.setItem('themes',"#deb887");
  }
  else{
      document.body.style.backgroundColor = "#aec3eb";         
      localStorage.setItem('themes',"#aec3eb");

  }

}

function newPage(buts){
  if(buts == '2'){
    window.open('/Основа_Картинки.html','_self',false)
  }
  if (buts == '1') {
    window.open('/Основа.html','_self',false)
  } 

}

button1.onclick = changeColor();
button2.onclick = newPage('2');
button3.onclick = newPage('1');

