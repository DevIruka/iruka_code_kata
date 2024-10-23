function solution(number) {
    let count = 0;
    let length = number.length;
    for (let i = 0; i < length; i++) {
        /// 0, 1, 2, 3...
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    count += 1;
                }
            }
        }
    }
    return count
}