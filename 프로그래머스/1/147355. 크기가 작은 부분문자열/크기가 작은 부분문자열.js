function solution(t, p) {
    let answer = 0;
    const pNum = Number(p);

    for (let i = 0; i < t.length - p.length + 1; i++) {
        let value = Number(t.substring(i, i + p.length));
        if (value <= pNum) {
            answer += 1;
        }
    }

    return answer;
}