

//Random Number Generate
let getRandomNumber = function(start, range) {
    let getRandom = Math.floor((Math.random() * range) +
start);
document.getElementById('generateking').value=getRandom
    while ( getRandom > range) {
        getRandom = Math.floor((Math.random() * range) +
        start);
        document.getElementById('generateking').value=getRandom
    }

        return getRandom;
    }
    console.log(getRandomNumber(5000, 10000));



//Input Numbers in Display
 let inputDisplay=document.getElementById('display');
function display(num){
inputDisplay.value+=num;
}


//ClearButton
let clearBtn=document.getElementById('clear').addEventListener('click',function(){
    inputDisplay.value='';
})

//Backspace
let backSpace=document.getElementById('backspace').addEventListener('click',function(){
    const inputDisplay = document.getElementById('display').value;
    document.getElementById('display').value = inputDisplay.substr(0, inputDisplay.length - 1);
})


//Pin Matcher
  submitBtn=document.getElementById('submit').addEventListener('click',function(){
    generateValue=document.getElementById('generateKing').value;
    inputValue=document.getElementById('display').value;
    if(generateValue==inputValue){
        document.getElementById('right').style.display='block';
    }
    else{
        document.getElementById('wrong').style.display='block';
        decreaseBtn=document.getElementById('tryleft').innerHTML;
        decreaseNum=parseInt(decreaseBtn);
        decreaseBtnNew=decreaseNum-1;
       document.getElementById('tryleft').innerHTML=decreaseBtnNew;

    }
    

     document.getElementById('display').value='';

})
