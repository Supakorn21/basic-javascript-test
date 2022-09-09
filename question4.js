// 4.เขียนฟังก์ชันรีเทิร์นค่า ตัวอักษรที่อยู่กึ่งกลางของข้อความ  (20 คะแนน)
// ตัวอย่าง
// "test" -> "es"
// "testing" -> "t"
// "middle" -> "dd"
// "a" -> "a"

const main = (word) => {
  const toArr = word.split("");
  const findMiddleEven = toArr[Math.floor((toArr.length - 1) / 2)];
  const findMiddleOdd = toArr[Math.floor(toArr.length / 2)];
  const checking =
    toArr.length % 2 === 0 ? findMiddleEven + findMiddleOdd : findMiddleOdd;

  console.log(checking);
  return checking;
};

main("a");
