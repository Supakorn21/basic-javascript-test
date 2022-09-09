// 7.สร้างฟังก์ชั่นเรียงเลขคี่ โดยที่เลขคู่จะต้องอยู่ตำแหน่งเดิม (35 คะแนน)
// ตัวอย่าง
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const arr1 = [7, 1];
const arr2 = [5, 8, 6, 3, 4];
const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const main = (arr) => {
  const oddsNumbers = arr.filter((x) => x % 2).sort((a, b) => a - b);
  // console.log(oddsNumbers);

  const result = arr.map((x) => {
    if (x % 2) {
      return oddsNumbers.shift();
    } else {
      return x;
    }
  });
  console.log(result);
  return result;
};

main(arr3);
