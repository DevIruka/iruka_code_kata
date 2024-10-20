function solution(arr) {
    let answer;
    let smallest = Math.min(...arr)
    answer = arr.filter(function (item) {
        return item !== smallest;
    });
    if (answer.length === 0) {
        answer.push(-1);
    } 
    return answer
}