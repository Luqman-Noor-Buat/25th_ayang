const bar=document.querySelector(".bar");

const loading=document.querySelector(".loading");

const container=document.querySelector(".container");

const percent=document.getElementById("percent");

let i=0;

let timer=setInterval(()=>{

i++;

bar.style.width=i+"%";

percent.innerHTML=i+"%";

if(i>=100){

clearInterval(timer);

loading.style.display="none";

container.classList.remove("hidden");

}

},40);

document.getElementById("start").onclick=()=>{

window.location.href="pages/question.html";

}
