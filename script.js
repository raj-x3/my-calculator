let number = 0;

let display = document.getElementById("display");
console.log(display);

let buttons = document.querySelectorAll(".number");

let startNewNumber = true;
let firstnumber = ""
let operator = ""

let backspace = document.getElementById("backspace")
backspace.addEventListener("click", function(){
    display.value = display.value.slice(0,-1);


});


buttons.forEach(function(button) {
    button.addEventListener("click", function(){
        if(startNewNumber){
            display.value = button.innerText
            startNewNumber = false
        }
        else{
            display.value = display.value + button.innerText
        }
    });
});

let clear = document.getElementById("clear")

clear.addEventListener("click", function(){
    
    display.value = "";
    firstnumber = "";
    operator = "";
    startNewNumber = true;

});



let plus = document.getElementById("plus");

plus.addEventListener("click", function(){
    firstnumber = display.value;
    operator ="+";
    display.value ="";
});

let minus = document.getElementById("minus");

minus.addEventListener("click", function(){
    firstnumber = display.value;
    operator ="-";
    display.value ="";
});

let multiply = document.getElementById("multiply");

multiply.addEventListener("click", function(){
    firstnumber = display.value;
    operator ="x";
    display.value ="";
});

let square = document.getElementById("square");

square.addEventListener("click", function(){
    firstnumber = display.value;
    operator="**";
    display.value = "";

});

let squareroot = document.getElementById("squareroot");

squareroot.addEventListener("click", function(){
    firstnumber = Number(display.value);
    operator = "@";
});





let divide = document.getElementById("divide");

divide.addEventListener("click", function(){
    firstnumber = display.value;
    operator ="/";
    display.value ="";
});

let decimal = document.getElementById("decimal")

decimal.addEventListener("click" , function(){
    if(!display.value.includes(".")){
        display.value = display.value +"."
    }

});

let percentage = document.getElementById("percentage");

percentage.addEventListener("click" , function(){
    firstnumber = display.value;
    operator ="%";
    display.value =""


});

let change = document.getElementById("change");
change.addEventListener("click", function(){
    if(Number(display.value) != 0 && display.value !== "" ){
        display.value = Number(display.value)* -1;
    }

});

let equal = document.getElementById("equal")

equal.addEventListener("click", function(){
    let secondnumber = Number(display.value)
    let result ;
    if (operator === "") {
    return;
    }
    else if (operator === "+"){
        result = Number(firstnumber) + secondnumber
    }
    else if (operator === "-") {
        result = Number(firstnumber) - secondnumber;
    }
    else if (operator === "x") {
        result = Number(firstnumber) * secondnumber;
    }
    else if (operator === "/") {
        if (secondnumber === 0){
            result = "Not possible to divide by 0"
        }
        else{
        result = Number(firstnumber) / secondnumber;
        }
    }
    else if (operator === "**"){
        result = Number(firstnumber) ** secondnumber
    }
    else if(operator === "@"){
        result = Math.sqrt(Number(firstnumber));

    }

    else if(operator==="%"){
        result = Number(firstnumber)* secondnumber / 100
    }
    display.value = result
    firstnumber = result
    operator = ""
    startNewNumber = true


})