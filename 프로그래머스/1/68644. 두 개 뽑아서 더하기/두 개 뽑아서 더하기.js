function solution(numbers) {
    let answer = [];
    let anotherArray = [...numbers];
    for (let i = 0; i < numbers.length; i++) {
        let slicedArray = anotherArray.slice(i + 1, anotherArray.length);
        for (let j = 0; j < slicedArray.length; j++) {
            if (!answer.includes(numbers[i] + slicedArray[j])) {
                answer.push(numbers[i] + slicedArray[j]);
            }
        }
    }
    return answer.sort((a, b) => a - b)
}