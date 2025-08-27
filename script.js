const dema =document.getElementById("demarre");
const pau =document.getElementById("pause");
const anu =document.getElementById("annule");
const sp =document.getElementsByTagName("span")
var ms=0,s=0,h=0,min=0,t;
function chrono(){
    ms+=1;
    if(ms==10){
        ms=0;
        s+=1;
    }
    if(s==60){
        s=0;
        min+=1;
    }
    if(s==60){
        min=0;
        h+=0;
    }
    sp[0].innerHTML=h+"h";
    sp[1].innerHTML=min+"min";
    sp[2].innerHTML=s+"s";
    sp[3].innerHTML=ms+"ms";
}
function deman(){
    t=setInterval(chrono,100);
    dema.disabled=true;
}
function paus(){
    clearInterval(t);
    dema.disabled=false;
}
function ann(){
    clearInterval(t);
    dema.disabled=false;
    ms=0;s=0;min=0;h=0;
    sp[0].innerHTML=h+"h";
    sp[1].innerHTML=min+"min";
    sp[2].innerHTML=s+"s";
    sp[3].innerHTML=ms+"ms";
}
const parent = document.getElementById("parent");
const newElement = document.createElement("p");
newElement.textContent="bonjour, monde";
parent.appendChild(newElement);




