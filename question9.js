// 9.สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน [1, 2, 5, 10, 20, 50, 100, 500, 1000] input: เงินที่ต้องจ่าย, รับเงินที่ลูกค้าจ่าย output: เหรียญหรือแบงค์ที่ต้องทอน  (60 คะแนน)

// ตัวอย่าง
//  Input:
// จำนวนเงินที่ต้องจ่าย 35 บาท ลูกค้าจ่ายเข้ามา 100 บาท

// Output: ทอนด้วยแบงค์ 50 1 ใบ, เหรียญ 10 1 เหรียญ เหรียญ 5 1 เหรียญ

const main = (price, paidSum) => {
  let cash = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  let change = paidSum - price;
  let getChange = cash.reverse().map((coin) => {
    let amountCoin = Math.floor(change / coin);
    change = change - amountCoin * coin;
    // console.log({ coin, amountCoin, change });

    return { coin, amountCoin };
  });
  // .reverse();

  let result = getChange.filter((obj) => obj.amountCoin !== 0);
  console.log(result);
};
main(100, 1000);
