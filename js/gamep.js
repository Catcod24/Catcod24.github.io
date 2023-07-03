function game_play(type){
  if(type == 1){
    window.CrazyGames.SDK.game.gameplayStart();
  } else {
    window.CrazyGames.SDK.game.gameplayStop();
  }
}
