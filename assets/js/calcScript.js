const display = document.querySelector(".display");

function updateCalculation(x) {
  const numberArray = [];
  numberArray.push(display.value);
  display.value += x;
  return numberArray;
}


function equalTo(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value ="error";
  }
  
}
function enter(event){
  if(event.key === 'Enter'){
    equalTo();
  }
}
function clearItem(){

  display.value='';
}
let darkmode = document.querySelector(".Dmode")
darkmode.onclick=function(){
  document.querySelector(".body2").style.backgroundColor="rgb(35, 36, 36)";
  document.querySelector(".Dmode").style.display="none";
  document.querySelector(".Lmode").style.display="block";
  document.querySelector(".calc").style.backgroundColor="black";
  document.querySelector(".createdby").style.color="white";


}
let lightmode = document.querySelector(".Lmode")
lightmode.onclick=function(){
  document.querySelector(".body2").style.backgroundColor="white";
  document.querySelector(".Lmode").style.display="none";
  document.querySelector(".Dmode").style.display="block";
  document.querySelector(".calc").style.backgroundColor="white";
  document.querySelector(".createdby").style.color="black";
}





