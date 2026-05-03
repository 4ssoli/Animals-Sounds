const animalCards = document.querySelectorAll('.animal-card');
const sounds = {
    c: document.querySelector('#sound-cat'),
    d: document.querySelector('#sound-dog'),
    b: document.querySelector('#sound-bird'),
};

function playAnimal(key) {
    const lowerKey = key.toLowerCase();
    const audio = sounds[lowerKey];
    const card = document.querySelector(`.animal-card[data-key="${lowerKey}"]`);

    if (!audio || !card) return;

    audio.currentTime = 0;
    audio.play();
    card.classList.add('playing');
}

function removeAnimation(event) {
    if (event.type === 'animationend' || event.type === 'transitionend') {
        event.currentTarget.classList.remove('playing');
    }
}

animalCards.forEach((card) => {
    card.addEventListener('click', () => {
        const key = card.dataset.key;
        playAnimal(key);
    });
    card.addEventListener('animationend', removeAnimation);
    card.addEventListener('transitionend', removeAnimation);
});

window.addEventListener('keydown', (event) => {
    const validKeys = ['c', 'd', 'b'];
    if (validKeys.includes(event.key.toLowerCase())) {
        playAnimal(event.key);
    }
});
