console.log('load.js imported');
var l_status = 0;
function g_load(type){
  if(type == 1){
    l_status = 1;
    window.CrazyGames.SDK.game.sdkGameLoadingStart();
  } else {
    if(type == 0){
      l_status = 0;
      window.CrazyGames.SDK.game.sdkGameLoadingStop();
    } else {
      if(type == 'get'){
        return l_status;
      }
    }
  }
}

