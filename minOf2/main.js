// 得到两个数字中最大的那个数
// let maxOf2 = (number) => (number[0] > number[1] ? number[0] : number[1]);

// 这里运用到了结构赋值，因为我传入的参数是数组，相当于[a,b] = [2,4]
let maxOf2 = ([a, b]) => (a > b ? a : b);

// 得到三个数中最大的那个数
let maxOF3 = ([a, b, c]) => {
  // 注意maxOf2的参数是被结构赋值过的，这样才能获得对应的值
  return maxOf2([a, maxOf2(b, c)]);
};

let maxOf4 = ([a, b, c, d]) => {
  // 注意maxOf3的参数是被结构赋值过的，这样才能获得对应的值
  return maxOf2([a, maxOF3(b, c, d)]);
};
