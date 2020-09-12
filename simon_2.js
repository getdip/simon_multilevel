var gameLevel=0;
var arr=[];
  cnt=0;

document.addEventListener('keypress', automatic);

function automatic() {
  document.querySelector('.title').innerHTML='GAME '+"LEVEL "+gameLevel.toString();
   var cnt=0;
  arr=[];

  for (var i = 0; i<gameLevel+1;i++ ){
    var r = Math.floor(Math.random()*4)+1;
    if (r===1){
        arr.push("red");
    }
    else if (r===2) {
      arr.push("green");
    }
    else if (r===3){
      arr.push("blue");
    }
    else if(r===4){
      arr.push("yellow");
    }
  }
      for (var i = 0; i<arr.length;i++ ){
       cnt=cnt+1;
       doSetTimeout(arr[i],cnt);

     }

console.log(arr);

  }


  function doSetTimeout(i,cnt){

     setTimeout(function(){playList(i);},500*cnt);
   }






for (var j=0;j<document.querySelectorAll('.btn').length;j++){


document.querySelectorAll('.btn')[j].addEventListener('click',function(){
console.log(arr,cnt);

  var f= this.id;
  if (arr[cnt]===f){
    if (cnt+1===arr.length){
      var audio_correct = new Audio('sounds/' + f + '.mp3');
      audio_correct.play();
      setTimeout(function(){alert("Congrats\rMove on to the level "+gameLevel.toString())},400);
      gameLevel++;
      cnt=0
      setTimeout(function(){automatic();},1000);



}

    else{
      var audio_correct = new Audio('sounds/'+f+'.mp3');
      audio_correct.play();
      cnt++;
    }

}


    else{
      var audio_wrong = new Audio('sounds/wrong.mp3');
      audio_wrong.play();
      document.querySelector("h1").textContent="Game Over";
      setTimeout(function(){location.reload()},1500);

    }





})

}

// playsound


function playList(k){
  switch (k) {
    case "red":
    var audio_r = new Audio('sounds/red.mp3');
    audio_r.play();
    showAnimation(k);

      break;
    case "green":
    var audio_g = new Audio('sounds/green.mp3');
    audio_g.play();
    showAnimation(k);

      break;
    case "blue":
    var audio_b = new Audio('sounds/blue.mp3');
    audio_b.play();
    showAnimation(k);

      break;
    case "yellow":
    var audio_y = new Audio('sounds/yellow.mp3');
    audio_y.play();
    showAnimation(k);

      break;
  }

}

//playSound



//showAnimation


function showAnimation(k){
  document.querySelector('#'+k).classList.add("pressed");
  setTimeout(function(){document.querySelector('#'+k).classList.remove("pressed");},100);
}

//showAnimation
