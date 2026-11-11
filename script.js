const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");

checkButton.addEventListener("click", function () {
  message.textContent = "页面运行正常";
});

const vocabulary = [
  { word: "invention", pronunciation: "/ɪnˈvenʃən/", partOfSpeech: "noun 名词", meaning: "发明；创造", example: "The invention changed the way people communicate." },
  { word: "creative", pronunciation: "/kriˈeɪtɪv/", partOfSpeech: "adjective 形容词", meaning: "有创造力的；有创意的", example: "She found a creative way to explain the difficult idea." },
  { word: "effective", pronunciation: "/ɪˈfektɪv/", partOfSpeech: "adjective 形容词", meaning: "有效的；产生预期效果的", example: "This is an effective method for learning new words." }
];

const wordIndex = document.getElementById("wordIndex");
const word = document.getElementById("word");
const pronunciation = document.getElementById("pronunciation");
const partOfSpeech = document.getElementById("partOfSpeech");
const meaning = document.getElementById("meaning");
const example = document.getElementById("example");
const previousWord = document.getElementById("previousWord");
const nextWord = document.getElementById("nextWord");
let currentWord = 0;

function renderWord() {
  const item = vocabulary[currentWord];
  wordIndex.textContent = `${currentWord + 1} / ${vocabulary.length}`;
  word.textContent = item.word;
  pronunciation.textContent = item.pronunciation;
  partOfSpeech.textContent = item.partOfSpeech;
  meaning.textContent = item.meaning;
  example.textContent = item.example;
}

previousWord.addEventListener("click", function () {
  currentWord = (currentWord - 1 + vocabulary.length) % vocabulary.length;
  renderWord();
});

nextWord.addEventListener("click", function () {
  currentWord = (currentWord + 1) % vocabulary.length;
  renderWord();
});

renderWord();
