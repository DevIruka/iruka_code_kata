function solution(s) {
    let answer;
    sArray = [...s.split(" ")];
    console.log(sArray);
    let answerArray = sArray.map((items) => {
        let arrofItems = [...items];
        for (let i = 0; i < items.length; i++) {
            if (i % 2 === 0) {
                arrofItems[i] = arrofItems[i].toUpperCase();
            } else {
                arrofItems[i] = arrofItems[i].toLowerCase();
            }
        }
        let newItems = arrofItems.join("");
        return newItems;
    });
    return (answer = answerArray.join(" "));
}