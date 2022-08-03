// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headChangesCount = 0;
let middleChangesCount = 0;
let bottomChangesCount = 0;
let totalChangesCount = 0;
// set state for all of the character's catchphrases
let characterCatchPhrases = [];

headDropdown.addEventListener('change', () => {
    const value = headDropdown.value;
    headChangesCount++;
    headEl.style.backgroundImage = `url('./assets/${value}-head.png')`;
    displayStats();
}),

middleDropdown.addEventListener('change', () => {
    const value = middleDropdown.value;
    middleChangesCount++;
    middleEl.style.backgroundImage = `url('./assets/${value}-middle.png')`;
    displayStats();
}),

bottomDropdown.addEventListener('change', () => {
    const value = bottomDropdown.value;
    bottomChangesCount++;
    bottomEl.style.backgroundImage = `url('./assets/${value}-bottom.png')`;
    displayStats();
}),

catchphraseButton.addEventListener('click', () => {
    const nuCatchphrase = catchphraseInput.value;
    characterCatchPhrases.push(nuCatchphrase);
    catchphraseInput.value = '';
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You have made ${headChangesCount + middleChangesCount + bottomChangesCount} changes total. Head: ${headChangesCount} Middle: ${middleChangesCount}Bottom: ${bottomChangesCount} `;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';
    for (let phrase of characterCatchPhrases) {
        characterCatchPhrases.forEach((phrase) => {
            const pTag = document.createElement('p');
            pTag.textContent = phrase;
            catchphrasesEl.append(pTag);
        });
    }
}
