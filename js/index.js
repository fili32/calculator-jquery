$(document).ready(function(){ 

var arrs=[""], result;
var operators1=["+", "-", "*", "/"];
var operators2=["."];
var nums=[0,1,2,3,4,5,6,7,8,9];

function update(){
  result=arrs.join("");
  $("#inputs").html(result); 
}
  function getvalue(arr) {
   if(operators2.includes(arrs[arrs.length-1])===true && arr==="."){
      console.log("Duplicate dot");
      }
  else if(arrs.length==1 && operators1.includes(arr)===false) {
          arrs.push(arr);
          }
  else if(operators1.includes(arrs[arrs.length-1])===false) {
           arrs.push(arr);
          }
  else if(nums.includes(Number(arr))) {
          arrs.push(arr);
          }
  update();
}
function getresult(){
  result=arrs.join("");
  $("#inputs").html(eval(result));
}

$("button").on("click", function(){
  if(this.id==="clear"){
    arrs=[""];
    arrs.push("0");
    update();
    arrs.pop();
  }
  else if(this.id==="=") {
          getresult();
          }
  else {
    if(arrs[arrs.length-1].indexOf("+","-","*","/")===-1){
      getvalue(this.id);
       }
       else{ 
          getvalue(this.id);
       }
  }
});

 });