function solution(babbling) {
    let count = 0;
    const validWords = ["aya", "ye", "woo", "ma"];
    babbling.forEach((word) => {
        let tempWord = word;
        validWords.forEach((validWord) => {
            tempWord = tempWord.replaceAll(validWord, " ");
        });
        if (tempWord.trim() === "") {
            count++;
        }
    });
    return count
}