function getnumber(num){
    var results=document.getElementById('result')
    results.value+=num
    
}
function clearresut(){
    var results=document.getElementById('result')
    console.log(results)
    results.value="";
}
function equal(){
    var results=document.getElementById('result')
    results.value=eval(results.value);
}
function delNUM(){
    var abc=document.getElementById('result')
    var remove=abc.value
    remove=remove.slice(0,-1)
    abc.value=remove;

    
   }

  

   
