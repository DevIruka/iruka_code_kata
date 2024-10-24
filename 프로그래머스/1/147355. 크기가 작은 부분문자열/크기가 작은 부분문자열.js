function solution(t, p) {
    let answer = 0;
    const pNum = Number(p);
    const tArray = [];

    for (let i = 0; i < t.length - p.length + 1; i++) {
        tArray.push(Number(t.substring(i, i + p.length)));
    }

    for (const nums of tArray) {
        if (nums <= pNum) {
            answer += 1
        }
    }
    return answer
}