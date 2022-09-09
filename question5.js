// 5.เขียนฟังก์ชั่นเเสดงข้อความที่มีจำนวนตัวอักษรเท่ากับตำแหน่งของตัวอักษรนั้นๆ (20 คะแนน)
// ตัวอย่าง
// "abcd" -> "a-bb-ccc-dddd"
// "big" -> "b-ii-ggg"
// "test" -> "t-ee-sss-tttt"

// const sumWord = (word, num) => {
//   let str = "";
//   for (let i = 0; i < num; i++) {
//     str = str + word;
//     // console.log(word + i);
//   }
//   return str;
// };

// const words = (word) => {
//   const toArr = word.split("");
//   const looping = toArr.reduce((acc, curr, index) => {
//     return acc + "-" + sumWord(curr, index + 1);
//   }, "");
//   const deleteDash = looping.slice(1, looping.length);
//   console.log(deleteDash);
// };

const sumWord = (word) => {
  let str = "";
  for (let n = 0; n < word.length; n++) {
    for (let i = 0; i <= n; i++) {
      str = str + word.split("")[n];
      console.log(str);
    }

    str += "-";
    // console.log(str);
  }

  str.toString;
  // console.log(str);
  return str;
};

sumWord("abcd");
