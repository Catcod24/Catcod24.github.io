alert('version 2.1');
const wri = document.createElement('button');
wri.style.border = "0px";
wri.style.backgroundColor = "white";
wri.innerHTML = "infinite ∞";
wri.style.fontSize = "15px";
const wrl = document.createElement('button');
wrl.style.border = "0px";
wrl.style.backgroundColor = "Chartreuse";
wrl.innerHTML = "levels";
wrl.style.fontSize = "15px";
let select = "l";
const dv = document.createElement('div');
dv.style.textAlign = "center";
const dvs = document.createElement('div');
dvs.style.textAlign = "center";
const btnp = document.createElement('button');
btnp.style.backgroundColor = "Chartreuse";
btnp.style.fontSize = "22px";
btnp.style.fontFamily = "Times New Roman";
btnp.innerHTML = "Play";
const des = document.createElement('p');
const db = document.createElement('br');
des.appendChild(db);
des.appendChild(db);
const ddes = document.createElement('p');
//ddes.appendChild(db);
document.body.appendChild(dv);
dv.appendChild(btnp);
dv.appendChild(des);
dv.appendChild(dvs);
dvs.appendChild(wrl);
dvs.appendChild(ddes);
dvs.appendChild(wri);
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
btnp.addEventListener('click', function () {
  wri.remove();
  wrl.remove();
  dvs.remove();
  btnp.remove();
  des.remove();
  ddes.remove();
  db.remove();
  div.remove();
  alert('ofc');
})

