alert('version 1.2');
var wri = document.createElement('button');
wri.style.border = "0px";
wri.style.backgroundColor = "white";
wri.innerHTML = "infinite ∞";
wri.style.fontSize = "15px";
var wrl = document.createElement('button');
wrl.style.border = "0px";
wrl.style.backgroundColor = "Chartreuse";
wrl.innerHTML = "levels";
wrl.style.fontSize = "15px";
var select = "l";
var dv = document.createElement('div');
dv.style.textAlign = "center";
var dvs = document.createElement('div');
dvs.style.textAlign = "center";
var btnp = document.createElement('button');
btnp.style.backgroundColor = "Chartreuse";
btnp.style.fontSize = "22px";
btnp.style.fontFamily = "Times New Roman";
btnp.innerHTML = "Play";
var des = document.createElement('p');
var db = document.createElement('br');
des.appendChild(db);
des.appendChild(db);
var ddes = document.createElement('p');
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
  wri = wrl = dvs = btnp = des = ddes = db = div = 0;
  if(select == 'i'){
    select = 'js/infinite.js';
  }
  if(select == 'l'){
    select = 'js/level.js';
  }
  var script = document.createElement('script');
  script.src = select;
  document.body.appendChild(script);
})

