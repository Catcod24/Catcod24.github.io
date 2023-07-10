var wri = document.createElement('button');
wri.style.border = "0px";
wri.style.backgroundColor = "white";
var wrl = document.createElement('button');
wrl.style.border = "0px";
wrl.style.backgroundColor = "Chartreuse";
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
dv.appendChild(wri);
dv.appendChild(wrl);
wri.addEventListener("click", sel("i"));
wrl.addEventListener("click", sel("l"));
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
