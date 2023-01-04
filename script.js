let number1=undefined;
let number2=undefined;
let ope=undefined;
let flag=0;

function add(num1,num2){
    num1=parseInt(num1);
    num2=parseInt(num2);
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function operate(num1,num2,operator){
    if(operator=='+')
        return add(num1,num2);
    else if(operator=="-")
        return subtract(num1,num2);
    else if(operator=="*")
        return multiply(num1,num2);
    else if(operator=="/")
        return divide(num1,num2);
}
function buttonPressed(e){
    let screen=document.querySelector(".screen")
    if(`${e.target.className}`=="button"){
        let a=`${e.target.id}`;
        if(a>=0 && a<=9){
            if(flag==0){
                if(number1==undefined){
                    number1=a;
                }
                else{
                    number1=number1+a;
                }
                screen.textContent+=number1;
            }
            else{
                if(number2==undefined){
                    number2=a;
                }
                else{
                    number2=number2+a;
                }
                screen.textContent+=number2;
            }
        }
        else if(a=='+' || a=='-' ||a=='*' ||a=='/'){
            flag=1;
            ope=a;
            screen.textContent+=ope;
        }
        else if(a=='='){
            number1=operate(number1,number2,ope);
            screen.textContent=number1;
            ope=undefined;
            flag=0;
            number2=undefined;
        }
    }
}

window.addEventListener("click",buttonPressed)