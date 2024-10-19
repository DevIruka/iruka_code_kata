function solution(n) {
    let sortedStrN = [...String(n)].sort((a, b) => b - a);
    let answer = Number(sortedStrN.join(""));
    return answer;
}