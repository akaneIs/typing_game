"use strict";

{
  //新しい単語をランダムにセットして、locを０の初期値に戻す関数
function setWord(){
  word = words.splice(Math.floor(Math.random()* words.length), 1)[0];
  target.textContent = word;
  loc = 0;

}

  const words = [
    "chiikawa",
    "hachiware",
    "momonga",
    "usagi",
    "yoroisan",
    "camera",
    "bear",
    "sasumata",
    "kusamushirikentei",
    "muchaumaman",
    "pajama",
    "ura",
    "namagawaki",
    "puding",
    "pururururu",
    "hueramune",
    "rakko",
    "si-sa-",
    "rakki-manbou",
    "charimera",
    "sfinks",

    ]


  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById("target");


  document.addEventListener("click", ()=> {
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

 document.addEventListener("keydown",e => {
  if(e.key !== word[loc]){
    return;
  }

    loc++;

    //1:_ed
    //2:__d
    //3:___

    target.textContent = "_".repeat(loc) + word.substring(loc);

    if(loc === word.length){
      if(words.length === 0){ 
        const elapsedTime = ((Date.now() - startTime)/1000).toFixed(2);
        const result = document.getElementById("result");
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        
        return;
      }
      setWord();
    }
 });

}