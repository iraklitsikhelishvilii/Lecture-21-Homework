// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":
// for (let index = 0; index < 15; index++) {
//   if (index > 5) {
//     console.log(index + " რიცხვი 5ზე მეტია");
//   } else {
//     console.log(index);
//   }
// }
// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:
// let numbers = [3, 6, 9, 12, 15];
// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 === 0) {
//     console.log(numbers[index] + " ლუწია");
//   } else {
//     console.log(numbers[index] + " კენტია");
//   }
// }
// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:
// let word = "javascript";
// for (let i = 0; i < word.length; i++) {
//   if (word[i] == "a") {
//     console.log(word[i] + " ვიპოვე");
//   } else {
//     console.log(word[i]);
//   }
// }

// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:
// let colors = ["red", "green", "blue", "yellow"];
// for (let i = 0; i < colors.length; i++) {
//   if (colors[i].length > 5) {
//     console.log(colors[i]);
//   }
// }
// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":
// for (let i = 1; i < 50; i++) {
//   if (i % 7 == 0) {
//     console.log(i + " გაყოფადია 7-ზე");
//   }
// }
// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:
// let numbers = [4, 8, 12, 16, 20];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] * 2);
// }
// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა:
// let word = "avasjcript";
// for (let i = 0; i < word.length; i++) {
//   if (word[i] == "j") {
//     console.log(word[i]);
//     break;
//   } else {
//     console.log(word[i]);
//   }
// }
// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:
// let numbers = [5, 10, 15, 20, 25, 11, 33];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 5 === 0) console.log(numbers[i]);
// }
// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':
// let word = "hello world";
// for (let i = 0; i < word.length; i++) {
//   if (word[i] === "o") {
//     console.log(word[i].replace("o", ""));
//   } else {
//     console.log(word[i]);
//   }
// }
// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:
// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100
// )
// let num = 10;
// for (let i = 1; i < 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }
// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:
// let numbers = [2, 7, 4, 9, 5];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 4) console.log(numbers[i] * 3 + " არის სამზე გამრავლებული");
//   else {
//     console.log(numbers[i]);
//   }
// }
// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი
// ტექსტის დაბეჭდვა:
// for (let i = 1; i < 30; i++) {
//   if (i > 10) {
//     console.log(i + " მეტია 10 ზე");
//   } else {
//     console.log(i);
//   }
// }
// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:
// let word = "frontend";
// for (let i = 0; i < word.length; i++) {
//   if (word[i] === "e") {
//     console.log("ნაპოვნია e");
//   } else {
//     console.log(word[i]);
//   }
// }
// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:
// let numbers = [100, 200, 300, 400, 500];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 250) {
//     console.log(numbers[i]);
//   }
// }
