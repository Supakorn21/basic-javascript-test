// 3.หาผลรวมสุดท้ายของตัวเลขที่รับมา (20 คะแนน)
// ตัวอย่าง
// 39 --> 4 (because 3*9 = 27, 2*7 = 14, 1*4 = 4)
// 999 --> 2 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 4

const number = (num) => {
  const toStr = num.toString();
  const toArr = toStr.split("");
  const multiply = toArr.reduce((acc, curr, index) => {
    return acc * curr;
  });
  if (multiply.toString().length === 1) {
    console.log(multiply);
  } else {
    number(multiply);
  }
};

number(999);
