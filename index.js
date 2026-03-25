document.getElementById("tog").onclick = function(){
    document.getElementById("cont").style.margin = "0 50%"
    document.getElementById("tog").style.display = "none"
    document.getElementById("to").style.display = "flex"
}
document.getElementById("to").onclick = function(){
    document.getElementById("cont").style.margin = "0 100%"
    document.getElementById("tog").style.display = "flex"
    document.getElementById("to").style.display = "none"
}
document.getElementById("s1").onclick = function(){
    document.getElementById("cont").style.margin = "0 100%"
    document.getElementById("tog").style.display = "flex"
    document.getElementById("to").style.display = "none"
}
document.getElementById("s2").onclick = function(){
    document.getElementById("cont").style.margin = "0 100%"
    document.getElementById("tog").style.display = "flex"
    document.getElementById("to").style.display = "none"
}
document.getElementById("contact").onclick = function(){
    window.location.href = "https://wa.me/+2349138907913"
}
document.getElementById("sur").onclick = function(){
    window.location.href = "text.html"
}
document.getElementById("re").onclick = function(){
    window.location.href = "resat.html"
}
document.getElementById("na").onclick = function(){
    window.location.href = "name.html"
}
