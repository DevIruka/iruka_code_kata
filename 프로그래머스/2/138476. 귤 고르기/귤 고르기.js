function solution(k, tangerine) {
  let answer = 0;
  const countMap = new Map();

  for (const t of tangerine) {
    countMap.set(t, (countMap.get(t) || 0) + 1);
  }
  // 키값이 t(tangerine의 요소)고, 밸류값이 t의 갯수인 map 구조를 생성한다. 
  const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);
  // sortedCount는 t의 갯수로 이루어진 배열을 오름차순으로 정리한다. 
  // 즉, 갯수가 많은 순으로 정렬된 배열이라고 볼 수 있다. 
  for (const count of sortedCounts) {
    k -= count;
    answer++;
    if (k <= 0) break;
  }

  return answer;
}