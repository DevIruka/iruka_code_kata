function solution(s, skip, index) {
    let answer = "";
    let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    const skipArray = skip.split("");
    alphabets = alphabets.filter((char) => !skipArray.includes(char));
    
    const maxLength = alphabets.length;

    answer = s
        .split("")
        .map((char) => {
            let currentIndex = alphabets.indexOf(char);
            let newIndex = (currentIndex + index) % maxLength;
            return alphabets[newIndex];
        })
        .join("");

    return answer;
}
