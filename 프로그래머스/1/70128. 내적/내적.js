function solution(a, b) {
    let answer = 0;
    const aLength = a.length
    for (let i = 0; i < aLength; i++) {
        answer += (a.pop() * b.pop())
    }
    return answer
}