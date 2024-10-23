function solution(n) {
    let answer = 0;
    let answerArray = [];
    let i = n;
    while (i) {
        answerArray.push(i % 3);
        i = Math.floor(i / 3);
    }
    for (let index = 0; index < answerArray.length; index++) {
            answer += answerArray[index] * 3 ** (answerArray.length - index - 1)
    }
    return answer;
}