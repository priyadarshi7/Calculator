let AC=document.querySelector("#AC");
let del=document.querySelector("#del");
let per=document.querySelector("#per");
let divi=document.querySelector("#divi");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let mul=document.querySelector("#mul");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let minus=document.querySelector("#minus");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let plus=document.querySelector("#plus");
let zero=document.querySelector("#zero");
let dot=document.querySelector("#dot");
let equal=document.querySelector("#equal");
let display=document.querySelector(".display");
let dblzero=document.querySelector("#dblzero");
seven.addEventListener("click",()=>{
    display.value+="7";
});
six.addEventListener("click",()=>{
    display.value+="6";
});
five.addEventListener("click",()=>{
    display.value+="5";
});
four.addEventListener("click",()=>{
    display.value+="4";
});
eight.addEventListener("click",()=>{
    display.value+="8";
});
nine.addEventListener("click",()=>{
    display.value+="9";
});
three.addEventListener("click",()=>{
    display.value+="3";
});
two.addEventListener("click",()=>{
    display.value+="2";
});
one.addEventListener("click",()=>{
    display.value+="1";
});
zero.addEventListener("click",()=>{
    display.value+="0";
});
dblzero.addEventListener("click",()=>{
    display.value+="00";
})
plus.addEventListener("click",()=>{
    display.value+="+";
});
minus.addEventListener("click",()=>{
    display.value+="-";
});
divi.addEventListener("click",()=>{
    display.value+="/";
});
per.addEventListener("click",()=>{
    display.value+="%";
});
dot.addEventListener("click",()=>{
    display.value+=".";
});
mul.addEventListener("click",()=>{
    display.value+="*";
});
AC.addEventListener("click",()=>{
    display.value="";
});
del.addEventListener("click",()=>{
    display.value=display.value.toString().slice(0,-1);
});
equal.addEventListener("click",()=>{
    display.value=eval(display.value);
});