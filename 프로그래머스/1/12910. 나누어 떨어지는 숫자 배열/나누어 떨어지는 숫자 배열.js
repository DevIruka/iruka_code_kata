function solution(arr, divisor) {
    let answer = [];
    arr.forEach((element) => {
        if (element % divisor === 0) {
            answer.push(element);
        }
    });
    answer = answer.sort((a, b) => a - b);

    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer
}