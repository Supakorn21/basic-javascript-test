// 1.ลบเครื่องหมาย ! ออกจากส่วนท้ายของสตริง (10 คะแนน)
// ตัวอย่าง
// remove("Hi!") ผล "Hi"
// remove("Hi!!!") ผล "Hi!!"
// remove("!Hi") ผล "!Hi"
// remove("!Hi!") ผล "!Hi"
// remove("Hi! Hi!") ผล "Hi! Hi"
// remove("Hi") ผล "Hi"

const remove = (str) => {
  const arr = str.split("");
  //   console.log(arr[arr.length - 1);
  if (arr[arr.length - 1] === "!") {
    arr.pop();
  }
  str = arr.join("");

  console.log(str);
};

remove("!Hi");
