'use strict';

const display = (function(){

    let sampleOne = 1;
    const sampleTwo = '2';
    let sampleThree = { name: 3};

    const home = document.querySelector('#home');
    const setting = document.querySelector('#setting');

    const hideHome = () => home.classList.add('hide');
    const showHome = () => home.classList.remove('hide');
    const showSetting = () => {
        hideHome();
        setting.classList.add('show');
    };

    return { 
        hideHome, showHome, showSetting
    }
})();




const game = (function(){
})();

const playButton = document.querySelector('#playButton');
playButton.addEventListener('click', display.showSetting);

// start the game
// restart the game

// mark tiles
// check for win
// check for draw
// switch turns
