function solution(numbers) {
    let answer = [];
    let anotherArray = [...numbers];
    for (let i = 0; i < numbers.length; i++) {
        // 2, 1, 3, 4, 5
        let slicedArray = anotherArray.slice(i + 1, anotherArray.length);
        for (let j = 0; j < slicedArray.length; j++) {
            if (!answer.includes(numbers[i] + slicedArray[j])) {
                answer.push(numbers[i] + slicedArray[j]);
            }
        }
    }
    console.log(answer.sort((a, b) => a - b));
    return answer;
}