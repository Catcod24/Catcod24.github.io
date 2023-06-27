document.body.style.backgroundImage = "url('images/bg/spatiu.jpg')";
var alert = document.getElementById('m');
var loading = document.createElement('p');
loading.innerText = 'Loading...';
loading.id = 'loading';
//loading.addEventListener("click", p);
var game = {current_version: "0.1"};
//var curent_version = "0.1";
game.version = "";
alert.appendChild(loading);
if (typeof(Storage) !== "undefined") {
  /*localStorage.setItem("lastname", "Smith");
  document.getElementById("loading").innerHTML = localStorage.getItem("lastname");*/
  if (localStorage.getItem('gm_version') !== null) {
    game.version = localStorage.getItem('gm_version');
  } else {
    game.version = game.curent_version;
    localStorage.setItem("gm_version", "0.1");
  }
}//aici se termina browsr stoargeul
function set_items(){
  game.fuel = 200;
  game.water = 200;
  game.oxigen = 1800;
  game.curent = 700;
  game.apple = 5;
  game.hunger = 100;
  game.thirst = 100;
  game.st1 = "";
  game.st2 = "";
  game.st3 = "";
  game.st4 = "";
  //pericole
  game.psus = "";
  game.pjos = "";
  game.pdreapta = "";
  game.pstanga = "";
  //distanta pericole
  game.psm = 0;
  game.pjm = 0;
  game.pdm = 0;
  game.pstm = 0;
  //gata distanta pericolelor
  game.asteroizi = 0;
}
function save_n(){
  localStorage.setItem("g_fuel", fuel.toString());
  localStorage.setItem("g_water", water.toString());
  localStorage.setItem("g_oxigen", oxigen.toString());
  localStorage.setItem("g_curent", curent.toString());
  localStorage.setItem("g_apple", apple.toString());
  localStorage.setItem("g_hunger", hunger.toString());
  localStorage.setItem("g_thirst", thirst.toString());
  localStorage.setItem("g_st1", st1);
  localStorage.setItem("g_st2", st2);
  localStorage.setItem("g_st3", st3);
  localStorage.setItem("g_st4", st4);
  localStorage.setItem("g_psus", psus);
  localStorage.setItem("g_pjos", pjos);
  localStorage.setItem("g_pdreapta", pdreapta);
  localStorage.setItem("g_pdreapta", pstanga);
  localStorage.setItem("g_psm", psm);
  localStorage.setItem("g_pjm", pjm);
  localStorage.setItem("g_pdm", pdm);
  localStorage.setItem("g_pstm", pstm);
  localStorage.setItem("asteorizi", asteroizi);
}














//loading.remove();
