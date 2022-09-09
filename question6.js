// 6.สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจาก น้อยไปมาก (30 คะแนน)
// ตัวอย่าง
// diffArray ([1, 2, 3],[100, 2, 1, 10]) => [ 3, 10, 100 ]

const main = (arr1, arr2) => {
  const diffArr = arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
  const sorting = diffArr.sort((a, b) => a - b);

  console.log(sorting);
};

main([1, 2, 3], [100, 2, 1, 10]);
