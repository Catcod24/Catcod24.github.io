alert("merge");
console.log('gameplay.js imported');
document.body.style.backgroundImage = "url('img/bg/spatiu.jpg')";
var load_s = document.createElement("script");
load_s.src = "js/load.js";
document.body.appendChild(load_s);
g_load(1);
var playdiv = document.createElement('div');
playdiv.id = 'divplay';
playdiv.style.width = "100%";
playdiv.style.textAlign = "center";
playdiv.style.height = "100%";
document.body.appendChild(playdiv);
var playbtn = document.createElement('button');
playbtn.id = 'btnplay';
playbtn.style.borderRadius = "25px";
playbtn.style.fontSize = "45px";
playbtn.style.fontFamily = "New Times Roman";
playbtn.style.background = "yellow";
playbtn.innerHTML = 'Play';
playbtn.style.position = "relative";
playbtn.style.top = "1px";
playbtn.addEventListener("click", play);
playdiv.appendChild(playbtn);
alert("ttulvai");
g_load(0);
alert("umm");
function play(){
  playbtn.remove();
  playdiv.remove();
  playbtn = 0;
  playdiv = 0;
  g_load(1);
  playdiv = document.createElement('div');
  playdiv.id = 'divplay';
  playdiv.style.width = "100%";
  playdiv.style.textAlign = "center";
  playdiv.style.height = "100%";
  document.body.appendChild(playdiv);
  playbtn = document.createElement('p');
  playbtn.innerHTML = "Loading...";
  playbtn.style.fontSize = '30px';
  playbtn.style.color = 'yellow';
  playdiv.appendChild(playbtn);
  var g_script = document.createElement('script');
  g_script.src = 'js/game.js';
  document.body.appendChild(g_script);
}


