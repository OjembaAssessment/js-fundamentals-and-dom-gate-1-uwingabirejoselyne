
const paragraph = document.getElementById("myParagraph").innerText;
const words = paragraph.split(" ");
const wordNumber = {};
words.forEach((word) => {
  const lowercase = word.toLowerCase();
  if (wordNumber[lowercase]) {
    wordNumber[lowercase]++;
  } else {
    wordNumber[lowercase] = 1;
  }
});


const sortedWords = Object.keys(wordNumber).sort(
  (a, b) => wordNumber[b] - wordNumber[a]
);


