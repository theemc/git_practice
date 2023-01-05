const toTranslate = 'turpentine and turtles';
const whaleSpeak = [];
for (i = 0; i < toTranslate.length; i++) {
    if (toTranslate[i] === 'e' || toTranslate[i] === 'u') {
        for (j = 0; j < 2; j++) {
            whaleSpeak.push(toTranslate[i]);
        }
    }
    if (toTranslate[i] === 'a' || toTranslate[i] === 'i' || toTranslate[i] === 'o') {
            whaleSpeak.push(toTranslate[i]);
    }
}
console.log(whaleSpeak.join('').toUpperCase());