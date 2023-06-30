document.body.style.backgroundImage = "url('img/bg/spatiu.jpg')";
/*const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

Try it Yourself »
*/
var playdiv = document.createElement('div');
playdiv.id = 'divplay';
playdiv.style.width = "100%";
playdiv.style.textAlign = "center";
playdiv.style.height = "100%";
document.body.appendChild(playdiv);
var playbtn = document.createElement('button');
playbtn.id = 'btnplay';
playbtn.style.borderRadius = "25px";
playbtn.style.fontSize = "25px";
playbtn.style.fontFamily = "New Times Roman";
playbtn.style.background = "yellow";
playbtn.innerHTML = 'Play';
playbtn.style.position = "relative";
playbtn.style.top = "100px";
playbtn.addEventListener("click", play);
playdiv.appendChild(playbtn);
function play(){
  playbtn.remove();
  playdiv.remove();
}


