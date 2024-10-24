function solution(strings, n) {
    let answer = [];
    const process = [];
    for (i = 0; i < strings.length; i++) {
        let nthStr = strings[i].slice(n, n + 1);
        let new_array = nthStr.concat(strings[i]);
        process.push(new_array);
    }
    process.sort();
    for (i = 0; i < process.length; i++) {
        let answerStr = process[i].slice(1, process[i].length);
        answer.push(answerStr);
    }
    return answer;
}