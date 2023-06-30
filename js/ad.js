console.log('ad.js imported');
const ad_n = { 
  adFinished: () => console.log("End midgame ad (callback)"), 
  adError: (error) => console.log("Error midgame ad (callback)", error), 
  adStarted: () => console.log("Start midgame ad (callback)"), 
};
const ad_r = { 
  adFinished: () => console.log("End rewarded ad (callback)"), 
  adError: (error) => console.log("Error rewarded ad (callback)", error), 
  adStarted: () => console.log("Start rewarded ad (callback)"), 
};
function play_ad(type){
  if(type == "m"){
    window.CrazyGames.SDK.ad.requestAd("midgame", ad_n);
  } else {
    window.CrazyGames.SDK.ad.requestAd("rewarded", ad_r);
  }
}
