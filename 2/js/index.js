var wri = document.createElement('button');
wri.style.border = "0px";
wri.style.backgroundColor = "white";
wri.addEventListener("click", sel("i"));
var wrl = document.createElement('button');
wrl.style.border = "0px";
wrl.style.backgroundColor = "Chartreuse";
wrl.addEventListener("click", sel("l"));
var select = "l";
var dv = document.createElement('div');
dv.style.textAlign = "center";
var btnp = document.createElement('button');
btnp.style.backgroundColor = "Chartreuse";
btnp.style.fontSize = "22px";
btnp.style.fontFamily = "Times New Roman";
btnp.innerHTML = "Play";
document.body.appendChild(dv);
dv.appendChild(btnp);
function sel(w){
  if(w == "i"){
    select = "i";
    wri.style.backgroundColor = "Chartreuse";
    wrl.style.backgroundColor = "white";
  } else {
    select = "l";
    wrl.style.backgroundColor = "Chartreuse";
    wri.style.backgroundColor = "white";
  }
}
