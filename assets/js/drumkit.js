(function(){
  const drumkit = {};

  drumkit.keys = document.querySelectorAll('.key');

  drumkit.init = function(){
    this.addEventHandlers();
  }

  drumkit.addEventHandlers = function(){
    document.addEventListener('keydown', this.playSound.bind(this));
    this.keys.forEach(key => {
      key.addEventListener('transitionend', this.removeAnimate);
    });
  }

  drumkit.playSound = function(e){
    const sound = document.querySelector(`audio[data-key="${e.which}"]`);
    const key = document.querySelector(`.key[data-key="${e.which}"]`);
    if(!sound || !key) return;
    this.animateKey(key);
    sound.currentTime = 0;
    sound.play();
  }

  drumkit.animateKey = function(key){
    key.classList.add('playing');
  }

  drumkit.removeAnimate = function(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  window.drumkit = drumkit;

})()