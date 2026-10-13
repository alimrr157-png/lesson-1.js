
let name = "Алим";
let age = 16;
let isStudent = true;
let emptyValue = null;
let unknownValue; // undefined


console.log("--- Переменные и их типы ---");
console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(emptyValue, typeof emptyValue); 
console.log(unknownValue, typeof unknownValue);


let person = {
  name: "Алим",
  age: 16,
  isStudent: true
};


console.log("--- Информация о персоне ---");
console.log(`Меня зовут ${person.name}, мне ${person.age} лет.`);


let favoriteGames = ["Cyberpunk 2077", "GTA V", "Need for Speed", "CS2", "Witcher 3"];


console.log("--- Любимые игры ---");
console.log(favoriteGames);