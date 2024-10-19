function solution(n) {
    let answer = 0;
    let rootValue = Math.sqrt(n);
    if (rootValue % 1 === 0) {
        answer += Math.pow(rootValue + 1, 2);
    } else {
        answer += -1;
    }
    return answer
}