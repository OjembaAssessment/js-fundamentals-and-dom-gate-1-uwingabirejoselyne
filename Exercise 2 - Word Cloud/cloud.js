
const paragraph = document.getElementById("myParagraph").innerText;
const words = paragraph.split(" ");
const wordNumber = {};
words.forEach((word) => {
const lowercase = word.toLowerCase();
if (lowercase in wordNumber) {
  wordNumber[lowercase]++;
  } else {
  wordNumber[lowercase] = 1;
  }
});
const sorted = Object.keys(wordNumber).sort(
  (a, b) => b.length - a.length
);
sorted.length = 12;
const fontSizes = [64, 60, 56, 52, 48, 44, 40, 36, 32, 28, 24, 20];
const colors = ["yellow", "green", "blue", "black"];
const div = document.getElementById("clouds");

sorted.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.className = "cloud-word ";
  span.style.color = colors[index % colors.length];
  span.style.fontSize = `${fontSizes[index % fontSizes.length]}px`;
  const rotation = Math.floor(Math.random() * 3) * 90 - 90;
  span.style.transform = `rotate(${rotation}deg)`;
  div.appendChild(span);
});
