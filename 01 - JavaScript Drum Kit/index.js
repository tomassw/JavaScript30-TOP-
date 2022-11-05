window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[date-key="${e.keyCode}"]`);
    const key = document.querySelector(`.ley[date-key="${e.keyCode}"]`);



    if (!audio) return; //stop the function from running all together

    audio.currentTIme = 0; //rewind to the start
    audio.play();

    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if its not a transform
    this.classList.remove('playing');
}

const keys = document.querrySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));