function solution(X, Y) {
  const xCount = Array(10).fill(0);
  const yCount = Array(10).fill(0);

  for (const digit of X) {
    xCount[digit]++;
  }
  for (const digit of Y) {
    yCount[digit]++;
  }

  const commonArray = [];
  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(xCount[i], yCount[i]);
    if (commonCount > 0) {
      commonArray.push(String(i).repeat(commonCount));
    }
  }

  const answer = commonArray.join('');
  if (answer === '') {
    return '-1'; 
  }
  if (Number(answer) === 0) {
    return '0'; 
  }
  return answer;
}
