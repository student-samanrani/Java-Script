var element ;

document.getElementById("header").onclick = fun;
function fun() {
    document.getElementById("header").style.backgroundColor = "teal";
}
document.getElementById("footer").addEventListener("mouseenter",abc);
function abc() {
    this.style.backgroundColor = "yellow";
}
document.getElementById("footer").addEventListener("mouseenter",function(){
    this.style.border = "10px solid green";
});
document.getElementById("main").addEventListener("mouseleave",bts);
function bts(){
    this.style.border = "10px solid red";
}
document.getElementById("main").addEventListener('click',xyz);
function xyz() {
   document.getElementById("main").removeEventListener('mouseleave',bts);
}
