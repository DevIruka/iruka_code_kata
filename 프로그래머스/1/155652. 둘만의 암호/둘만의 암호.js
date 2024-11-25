function solution(s, skip, index) {
    let answer = "";
    let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

    // skip에 포함된 알파벳 제거
    const skipArray = skip.split("");
    alphabets = alphabets.filter((char) => !skipArray.includes(char));
    
    const maxLength = alphabets.length;

    answer = s
        .split("")
        .map((char) => {
            let currentIndex = alphabets.indexOf(char);
            let newIndex = (currentIndex + index) % maxLength; // 초과하는 경우도 처리
            return alphabets[newIndex];
        })
        .join("");

    return answer;
}
