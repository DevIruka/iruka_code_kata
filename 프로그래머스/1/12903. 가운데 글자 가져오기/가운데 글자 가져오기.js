function solution(s) {
    let answer;
    let midIndex = Math.floor(s.length / 2);
    console.log(s.slice(1, 2));
    if (s.length % 2 === 0) {
        answer = s.slice(midIndex - 1, midIndex + 1);
    } else {
        answer = s.slice(midIndex, midIndex + 1);
    }
    return answer
}