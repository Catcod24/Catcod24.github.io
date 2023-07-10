var wri = document.createElement('button');
wri.style.border = "0px";
wri.style.backgroundColor = "white";
wri.innerHTML = "infinite ∞";
var wrl = document.createElement('button');
wrl.style.border = "0px";
wrl.style.backgroundColor = "Chartreuse";
wrl.innerHTML = "levels";
var select = "l";
var dv = document.createElement('div');
dv.style.textAlign = "center";
var dvs = document.createElement('div');
dvs.style.textAlign = "center";
var btnp = document.createElement('button');
btnp.style.backgroundColor = "Chartreuse";
btnp.style.fontSize = "22px";
btnp.style.fontFamily = "Times New Roman";
btnp.innerHTML = "Play/n\n";
document.body.appendChild(dv);
dv.appendChild(btnp);
dv.appendChild(dvs);
dvs.appendChild(wri);
dvs.appendChild(wrl);
wri.addEventListener("click", function () {
  select = "i";
  wri.style.backgroundColor = "Chartreuse";
  wrl.style.backgroundColor = "white";
});
wrl.addEventListener("click", function () {
  select = "l";
  wrl.style.backgroundColor = "Chartreuse";
  wri.style.backgroundColor = "white";
});

