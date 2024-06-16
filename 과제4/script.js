// 방세현 60201940 기초웹프로그래밍 과제4

//배열에 단어와 그 의미를 객체로 저장
const words = [
    { word: "joy", meaning: "A feeling of great pleasure and happiness." },
    { word: "apple", meaning: "A round fruit with red or green skin and a whitish interior." },
    { word: "banana", meaning: "A long curved fruit with a yellow skin." },
    { word: "cherry", meaning: "A small, round stone fruit that is typically bright or dark red." },
    { word: "grape", meaning: "Small, juicy fruits, enjoyed fresh, dried as raisins, or made into wine." }
];
let currentWord = '';
let guessedLetters = [];
let score = 0;
let wordsGuessed = 0;
const maxWords = 5;

document.addEventListener('DOMContentLoaded', (event) => {
    nextWord();
    document.getElementById('letterInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') { // 엔터키를 누르기만 해도 <Submit Guess>버튼을 수행하는 것과 똑같이 처리되도록 설정
            guessLetter();
        }
    });
});

function nextWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWordObject = words[randomIndex];
    currentWord = randomWordObject.word;
    document.getElementById('wordMeaning').textContent = "Meaning: " + randomWordObject.meaning;
    guessedLetters = [];
    updateWordDisplay();
    document.getElementById('message').textContent = '';
    document.getElementById('letterInput').value = '';
    const actionButton = document.getElementById('actionButton');
    actionButton.textContent = 'Submit Guess';
    actionButton.onclick = guessLetter;

    words.splice(randomIndex, 1) // 나오는 문제의 중복을 방지하기 위함.
}

function updateWordDisplay() {
    let display = currentWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    document.getElementById('wordDisplay').textContent = display;
    checkWin();
}

function guessLetter() {
    const letterInput = document.getElementById('letterInput');
    const guessedLetter = letterInput.value.toLowerCase();
    letterInput.value = '';

    if (guessedLetter.length === 0) { // 입력된 글자가 없는 경우
        document.getElementById('message').textContent = 'Please enter a letter.';
        return;
    }

    if (guessedLetters.includes(guessedLetter)) { // 이미 추측한 글자인 경우
        document.getElementById('message').textContent = 'You have already guessed that letter.';
        return;
    }

    guessedLetters.push(guessedLetter);

    if (currentWord.includes(guessedLetter)) { //추측한 글자가 맞는지 틀린지 체크
        document.getElementById('message').textContent = `Good job! The letter "${guessedLetter}" is in the word.`;
    } else {
        document.getElementById('message').textContent = `Sorry. the letter "${guessedLetter}" is not in the word.`;
    }

    updateWordDisplay();
}

function checkWin() {
    const currentDisplay = document.getElementById('wordDisplay').textContent.replace(/\s+/g, '');
    if (currentDisplay === currentWord) {
        score += 1;
        wordsGuessed += 1;
        document.getElementById('score').textContent = score;
        const actionButton = document.getElementById('actionButton');
        if (wordsGuessed >= maxWords) { //맞춘 단어의 수가 최대 단어수 이상일 경우 (게임 종료)
            actionButton.textContent = 'Game Over';
            actionButton.onclick = null;
            document.getElementById('message').textContent = ' Game over! You guessed 5 out of 5 words correctly';
            actionButton.style.display = 'none';
            document.getElementById('letterInput').style.display = 'none';
        } else { // 그렇지 않을 경우
            document.getElementById('message').textContent = 'Congratulations! You guessed the word!';
            actionButton.textContent = 'Next Word';
            actionButton.onclick = nextWord;

        }
    }
}
