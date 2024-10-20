const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = 0;
function solution(numbers) {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    const newarray = array.filter(function (item) {
        return !numbers.includes(item);
    });
    newarray.forEach((element) => {
        answer += element
    });
    return answer
}