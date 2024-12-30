function gcd(a, b) {
  while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 0;
  while (arr.length !== 1) {
    const first = arr.shift();
    const second = arr.shift();
    const LCM = lcm(first, second);
    arr.unshift(LCM);
    console.log(arr);
  }
  return arr[0];
}