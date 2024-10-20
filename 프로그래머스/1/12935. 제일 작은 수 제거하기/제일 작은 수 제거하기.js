function solution(arr) {
    let answer;
    let newArr = [...arr]
    let smallest = newArr.sort((a, b) => b - a).pop();
    answer = arr.filter(function (item) {
        return item !== smallest;
    });
    if (answer.length === 0) {
        answer.push(-1);
    } 
    return answer
}