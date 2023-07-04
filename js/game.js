alert('x');
var game = {
  version_c: 0.1,
  version_r: 0.1,
  level: 0,
  l_stage: 0,
  l_total_stage: 0,
  ls: 9
}
var items = {
  money: 0,
  apple: 0
}
if (typeof(Storage) !== "undefined") {
  if(localStorage.getItem('version_r') !== null){
  } else {
  }
} else {
  // Sorry! No Web Storage support..
}
