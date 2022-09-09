// 2.เขียนฟังก์ชั่นรวมตัวเลขที่รับมา  (15 คะแนน)
// ตัวอย่าง
// input: 89 process 8**1 + 9**2 output: 89
// input: 123 process 1**1 + 2**2 + 3**3  output: 32
// input: 65 process 6**1 + 5**2  output: 31
// input: 321 process 3**1 + 2**2 + 1**3  output: 8

const number = (num) => {
  const numToStr = num.toString();
  const strToArr = numToStr.split("");
  const exponent = strToArr.reduce((acc, curr, index) => {
    return acc + curr ** (index + 1);
  }, 0);
  console.log(exponent);
};

number(321);
