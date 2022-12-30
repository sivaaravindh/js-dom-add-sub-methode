let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
btn1.addEventListener("click",myFunct);
btn2.addEventListener("click",myFunct1);

function myFunct(){
  let add=document.getElementById("number").value;
  add++;
  document.getElementById("number").value=add;
}
function myFunct1(){
  let add=document.getElementById("number").value;
  if(add>0){
  add--;
  document.getElementById("number").value=add;
  }
}

