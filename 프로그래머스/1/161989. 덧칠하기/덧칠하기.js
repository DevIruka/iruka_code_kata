function solution(n, m, section) {
    let answer = 0; 
    let currentEnd = 0; 
    for (let i = 0; i < section.length; i++) {
        if (section[i] > currentEnd) {
            answer++; 
            currentEnd = section[i] + m - 1;
        }
    }
    return answer;
}