function solution(n) {
    let answer = 0;
    let strAnswer = 0;
    let sortedStrN = [...String(n)].sort((a, b) => b - a);
    sortedStrN.forEach((element) => {
        strAnswer += element;
    });
    answer += Number(strAnswer);
    return answer;
}