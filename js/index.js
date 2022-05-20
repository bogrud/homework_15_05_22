let item1 = 11;
console.log(`Переменная с числовым значением: ${item1}`);

let item2 = (1 < 2 && 3 === 3);
console.log (`Переменная с булевым значением: ${item2}`);

let item3 = "JavaScript";
console.log(`Переменнная с типом данных "string": ${item3}`);
console.log(typeof item3);

let item4 = "100";
console.log(`Переменная с типом данных "string": ${item4}`);
console.log(typeof item4);

//==============================================================

let greeting = 'Hello ', userName;
userName = prompt('Введите имя пользователя!');

console.log(greeting + userName + " !!!");

//===============================================================

let timePoint;
timePoint = prompt('Для определения четверти часа введите значение от 0 до 60');

if (timePoint >= 0 && timePoint <= 14) {
  console.log("Первая четверь часа!!!")
}
if (timePoint >= 15 && timePoint <= 29) {
  console.log("Вторая четверть часа!!!")
}
if (timePoint >= 30 && timePoint <= 44) {
  console.log("Третья четверть часа!!!")
}
if (timePoint >= 45 && timePoint <= 60) {
  console.log("Четвертая четверь часа!!!")
}

//=================================================================

let x = 10;
while (x++ < 50) {
  x % 5 || console.log (`${x}`);
}

//=================================================================

let lim1 = 12;
for (let lim2 = 1; lim2 <= 50; lim2++) {
lim1 = lim1 * lim2;
}
console.log(lim1);

//================================================================