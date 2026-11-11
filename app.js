// practice 1
const numbers = [5, 12, 8, 130, 44];

// 1
const descendingNumbers = [...numbers].sort((a, b) => b - a);
console.log(descendingNumbers); // [130, 44, 12, 8, 5]

// 2
const lessThan30 = numbers.filter((num) => num < 30);
console.log(lessThan30); // [5, 12, 8]

// 3
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 199

// 4
const stringNumbers = numbers.map((num) => num.toString());
console.log(stringNumbers); // ["5", "12", "8", "130", "44"]

// 5
const subtractedByIndex = numbers.map((num, index) => num - index);
console.log(subtractedByIndex); // [5, 11, 6, 127, 40]

// practice 2
function getWeekday(date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[date.getDay()];
}

console.log(getWeekday(new Date())); // بستگی به روز فعلی دارد
console.log(getWeekday(new Date('2012-10-10'))); // "Wednesday"

// practice 3
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // یک عدد صحیح تصادفی بین 1 و 10 (شامل هر دو سر بازه)

// practice 4
function kebabToPascalCase(sentence) {
    const words = sentence.split(' ');
    const transformedWords = words.map(word => {
        if (word.includes('-')) { 
            const parts = word.split('-');
            const pascalCaseWord = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
            return pascalCaseWord;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    return transformedWords.join(' ');
}

const sentence = "convert kebab-case to pascal-case";
const result = kebabToPascalCase(sentence);
console.log(result); // "Convert KebabCase To PascalCase"