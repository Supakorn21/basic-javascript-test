// 8.สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มีผลรวมเท่ากับ target (40 คะแนน)
// ตัวอย่าง
// Ex1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]
// Ex2 Input: nums = [3,2,4], target = 6 Output: [1,2]

const nums1 = [2, 7, 11, 15];
const nums2 = [3, 2, 4];

const main = (nums, target) => {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        console.log([x, y]);
        return [x, y];
      }
    }
  }
};

main(nums2, 6);
