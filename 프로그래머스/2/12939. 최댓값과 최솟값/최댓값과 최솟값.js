function solution(s) {
  // let answer = "";
  const min = Math.min(...s.split(" "));
  const max = Math.max(...s.split(" "));
  const answer = `${min} ${max}`;
  return answer;
}