// 1-topshiriq
// const input = "abc 123 test 4567 js";

// const number = "1234567890";

// const output = input.split(" ").filter((word) => {
//   for (let char of word) {
//     if (!number.includes(char)) {
//       return false;
//     }
//   }
//   return word
// });

// console.log(output);

// const numbersFiltired = (numbersAndString) => {
//   const filtired = numbersAndString.split(" ");
//   const Numbers = filtired.filter((n) => n % 1 == 0);
//   const arrNumber = Numbers.join(" ").split(" ");
//   console.log(Numbers);
// };

// numbersFiltired("abc 123 test 4567 js");

// =========================================
// 2-topshiriq
// const input = "hello world javascript";
// 1-usul
// const output = input.split("").reverse().join("")
// const result = output.split(" ").reverse().join(" ")
// 2-usul
// const output = input
//   .split(" ")
//   .map((word) => {
//     return word.split("").reverse().join("");
//   })
//   .join(" ");
// console.log(output);

// =============================================
// 3-topshiriq
// const input = "salom do'stim qandaysan"

// const output = input.split(" ").map((word)=>{
//     return word.charAt(0).toUpperCase() + word.slice(1)
// }).join(" ")

// console.log(output);

//  =================================================
// 4-topshiriq
// const input = "hellooo world javascript";
// const unli = "aoieuAOIEU";

// const output = input.split(" ").map((word) => {
//  let vovels = 0;
//   for (let char of word) {
//     if (unli.includes(char)) {
//       vovels += 1;
//     }
//   }
//   return { word: word, vovels: vovels };
// });

// console.log(output);
