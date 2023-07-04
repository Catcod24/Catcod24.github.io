g_load(1);//porneste statusu de loading
game_play(0);
document.body.style.backgroundImage = "url('img/bg/spatiu.jpg')";
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
playbtn.addEventListener("click", play);//pune eventul
playdiv.appendChild(playbtn);
g_load(0);//opreste statusu de loading
//get primesti statusu de loading
function play(){
  playbtn.remove();//sterge elementele
  playdiv.remove();
  playbtn = 0;
  playdiv = 0;
  g_load(1);//start statusu din nou
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
  var g_script = document.createElement('script');//importam game.js
  g_script.src = 'js/game.js';
  document.body.appendChild(g_script);
}


