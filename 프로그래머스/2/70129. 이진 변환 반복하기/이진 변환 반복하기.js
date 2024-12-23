function solution(s) {
  let answer = [];
  let zeroCount = 0;
  let changeCount = 0;
  while (s !== "1") {
    let newS = s.replace("0", "");
    if (newS.length < s.length) {
      zeroCount++;
    }
    s = newS;
    if (!s.includes("0")) {
      s = s.length.toString(2);
      changeCount++;
      console.log(s, changeCount);
    }
  }
  answer.push(changeCount);
  answer.push(zeroCount);
  console.log(answer);
  return answer;
}