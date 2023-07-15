var bup = document.createElement('button');
bup.style.position = 'absolute';
bup.style.left = '19%';
bup.style.bottom = '35%';
bup.style.width = '15%';
bup.style.height = '13%';
bup.style.opacity = '0.5';
var bod = document.createElement('button');
bod.style.position = 'absolute';
bod.style.left = '19%';
bod.style.bottom = '6%';
bod.style.width = '15%';
bod.style.height = '13%';
bod.style.opacity = '0.5';
var ble = document.createElement('button');
ble.style.position = 'absolute';
ble.style.left = '5%';
ble.style.bottom = '20%';
ble.style.width = '15%';
ble.style.height = '13%';
ble.style.opacity = '0.5';
var bri = document.createElement('button');
bri.style.position = 'absolute';
bri.style.left = '35%';
bri.style.bottom = '20%';
bri.style.width = '15%';
bri.style.height = '13%';
bri.style.opacity = '0.5';
var rp = document.createElement('button');
rp.style.position = 'absolute';
rp.style.left = '0%';
rp.style.bottom = '90%';
rp.style.width = '10%';
rp.style.height = '10%';
rp.style.border = '0px';
rp.zIndex = '-1';
document.body.appendChild(rp);
document.body.appendChild(bri);
document.body.appendChild(ble);
document.body.appendChild(bod);
document.body.appendChild(bup);
bup.addEventListener("click", function () {
  let or = rp.style.bottom;
  or.replace('%', '');
  let ori = parseInt(or);
  if(ori < 90){
    ori = ori + 10;
  }
  ori = ori.toString();
  ori = ori + '%';
  rp.style.bottom = ori;
});
bod.addEventListener("click", function () {
  let or = rp.style.bottom;
  or.replace('%', '');
  let ori = parseInt(or);
  if(ori > 0){
    ori = ori - 10;
  }
  ori = ori.toString();
  ori = ori + '%';
  rp.style.bottom = ori;
});
ble.addEventListener("click", function () {
  let or = rp.style.left;
  or.replace('%', '');
  let ori = parseInt(or);
  if(ori > 0){
    ori = ori - 10;
  }
  ori = ori.toString();
  ori = ori + '%';
  rp.style.left = ori;
});
bri.addEventListener("click", function () {
  let or = rp.style.left;
  or.replace('%', '');
  let ori = parseInt(or);
  if(ori < 90){
    ori = ori + 10;
  }
  ori = ori.toString();
  ori = ori + '%';
  rp.style.left = ori;
});
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var r = 0;
var a = 0;
r = random(1, 2);
var en1 = document.createElement('button');
var en2 = document.createElement('button');
en1.style.border = '0px';
en2.style.border = '0px';
if(r == 1){
  if(random(1, 2) == 1){
    en1.style.left = random(20, 60).toString() + '%';
    en1.style.width = random(1, 2);
  }
}

