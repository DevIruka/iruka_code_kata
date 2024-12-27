function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    // 다음 라운드로 진출할 번호 계산
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}