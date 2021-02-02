var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");
var generateButton = document.getElementsByClassName("generate-btn")[0];
generateButton.addEventListener("click", function () {
    firstInput.value = (Math.random() * 9000 +1000+ '').split(".")[0]; //just for enter 4 digit input 
})

const seven = document.getElementsByClassName("btn")[0];
seven.addEventListener("click", function () {
    secondInput.value = secondInput.value + "" + document.getElementsByClassName("btn")[0].innerText;
})
const eight = document.getElementsByClassName("btn")[1];
eight.addEventListener("click", function () {
    secondInput.value = secondInput.value + "8";
})
const nine = document.getElementsByClassName("btn")[2];
nine.addEventListener("click", function () {
    secondInput.value = secondInput.value + "9";
})
const four = document.getElementsByClassName("btn")[3];
four.addEventListener("click", function () {
    secondInput.value = secondInput.value + "4";
})
const five = document.getElementsByClassName("btn")[4];
five.addEventListener("click", function () {
    secondInput.value = secondInput.value + "5";
})
const six = document.getElementsByClassName("btn")[5];
six.addEventListener("click", function () {
    secondInput.value = secondInput.value + "6";
})
const one = document.getElementsByClassName("btn")[6];
one.addEventListener("click", function () {
    secondInput.value = secondInput.value + "1";
})
const two = document.getElementsByClassName("btn")[7];
two.addEventListener("click", function () {
    secondInput.value = secondInput.value + "2";
})
const three = document.getElementsByClassName("btn")[8];
three.addEventListener("click", function () {
    secondInput.value = secondInput.value + "3";
})
const backSpace = document.getElementsByClassName("btn")[9];
backSpace.addEventListener("click", function () {
    var str = document.getElementById("secondInput").value;
    var clearOne = str.slice(0, str.length - 1);
    secondInput.value = clearOne;
})
const zero = document.getElementsByClassName("btn")[10];
zero.addEventListener("click", function () {
    secondInput.value = secondInput.value + "0";
})
const clearButton = document.getElementsByClassName("btn")[11];
clearButton.addEventListener("click", function () {
    secondInput.value = "";
})
var i=3;
var submitButton=document.getElementById("submit");
submitButton.addEventListener("click",function(){
    if (firstInput.value==secondInput.value) {
        document.getElementById("notifyCorrect").style.display="block";
    }
    else if (firstInput.value!=secondInput.value) {
        document.getElementById("notifyCross").style.display="block";
        
            decrement();
        
    }
})
submitButton.addEventListener("click",decrement())
function decrement(){
    
    document.getElementById("p").innerText=(i+" try left");
    i=i-1;
    if (i<0) {
        document.getElementById("p").innerText="plz try again"
        document.getElementById("p").style.color="#fff"
    }
}