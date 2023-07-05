alert('x');
var game = {
  version_c: 0.1,
  version_r: 0.1,
  level: 0,
  l_stage: 0,
  l_total_stage 0,
  ls: 9
}
var items = {
  money: 0,
  apple: 0
}
var gamek = Object.keys(game);
var itemsk = Object.keys(items);
if (typeof(Storage) !== "undefined") {
  game.ls = 1;
  if(localStorage.getItem('version_r') !== null){
    var i = 0;
    while(i < gamek.lenght || i == gamek.lenght){
      if(gamek[i] !== 'ls' || gamek[i] !== 'version_c'){
        i = i + 1;
        game[gamek[i]] = localStorage.getItem(gamek[i]);
      } else {
        i = i + 1;
      }
    }
    i = 0;
    while(i < itemsk.lenght || i == itemsk.lenght){
      i = i + 1;
      items[itemsk[i]] = localStorage.getItem(itemsk[i]);
    }
  } else {//aici setam elemente din game si setam local stoarge
    var i = 0;
    game.level = 1;
    game.l_stage = 0;
    game.l_total_stage = 1;
    while(i < gamek.lenght || i == gamek.lenght){
      if(gamek[i] !== 'ls' || gamek[i] !== 'version_c'){
        i = i + 1;
        game[gamek[i]] = localStorage.getItem(gamek[i]);
      } else {
        i = i + 1;
      }
    }
    i = 0;
    while(i < itemsk.lenght || i == itemsk.lenght){
      i = i + 1;
      items[itemsk[i]] = localStorage.getItem(itemsk[i]);
    }
  }
} else {
  game.ls = 0;
  // Sorry! No Web Storage support..
}
