//Random Number Generate
document.getElementById('right').style.display='none';
document.getElementById('wrong').style.display = "none";
    let generateBtn=document.getElementById('generate').addEventListener('click',function(){
    let generateResult=document.getElementById('generateKing');
    let generateRandom=Math.floor(Math.random()*9000+1000);
    document.getElementById('generateKing').value=generateRandom;

})

//Input Numbers in Display
inputDisplay=document.getElementById('display');
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
