document.body.style.backgroundImage = "url('img/bg/spatiu.jpg')";
/*const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

Try it Yourself »
*/
var playdiv = document.createElement('div');
playdiv.id = 'divplay';
document.body.appendChild(playdiv);
var playbtn = document.createElement('button');
playbtn.id = 'btnplay';
playbtn.style.borderRadius = "25px";
playbtn.style.fontSize = "15px";
playbtn.innerHTML = 'play';
playbtn.addEventListener("click", play);
playdiv.appendChild(playbtn);
function play(){
  playbtn.remove();
  playdiv.remove();
}


