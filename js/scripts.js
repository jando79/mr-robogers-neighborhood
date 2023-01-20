
function convertToPigLatin(sentence) {
  let words = sentence.split(" ");
  let pigLatinWords = words.map(function(word) {
    let firstLetter = word[0];
    return word.slice(1) + firstLetter + "ay";
  });
  return pigLatinWords.join(" ");
}

function convertToPigLatin(sentence) {
  let words = sentence.split(" ");
  let pigLatinWords = words.map(function(word) {
    if(/^[aeiou]/i.test(word)) return word+"way"; // start with vowels
    if(/^qu/i.test(word)) return word.slice(2) + "quay"; // start with qu
    let firstLetter = word[0];



//User Interface Logic
function handleFormSubmission() {
  event.preventDefault();
}


  window.addEventListener("load", function() {
    document.querySelector("form#roboger-responds").addEventListener("submit", handleFormSubmission);
  });