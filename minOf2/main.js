// 得出两个数中的小的那个

let arr = [a, b];

// if (arr[0] > arr[1]) {
//   return arr[0];
// } else {
//   return arr[1];
// }

arr[0] > arr[1] ? arr[0] : arr[1];

// for (let i = 0; i < arr.length; i++) {}

// 得到两个数字中较大的那个数
let maxOf2 = (number) => (number[0] > number[1] ? number[0] : number[1]);
let maxOf2 = ([a, b]) => (a > b ? a : b);

// 得到一组数据中最大的那个数
let maxOfArr = (arr) => {};
