let randomNum = Math.floor(Math.random() * 3) + 3;
let timerId;

startGame();
function startGame(){
  let IntervalId = setInterval(function(){
    if(randomNum > 0){
      randomNum -= 1;
    }
    else{
      clearInterval(IntervalId);
      const clickBtn = document.getElementById('clickBtn');
      let timer = 0;
      const timerText = document.querySelector('.timer');
      clickBtn.disabled = false;
      clickBtn.style.backgroundColor = 'rgba(0, 255, 136, 0.5)';
      timerId = setInterval(function(){
        timer += 0.01;
        timerText.innerHTML = timer.toFixed(2);
      }, 10)
    }
  }, 1000)
}
function stopTimer(){
  clearInterval(timerId);
  clickBtn.disabled = true;
  clickBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
  setTimeout(function(){
    startGame();
  }, 4000 )
}