function solution(s) {
    let answer = [];
    let strArray = [...s];
    let newArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if (!newArray.includes(strArray[i])) {
            answer.push(-1);
        } else {
            if (newArray.includes(strArray[i])) {
                let indexes = [];
                newArray.forEach((item, index) => {
                    if (item === strArray[i]) {
                        indexes.push(index);
                    }
                });
                answer.push(i - indexes.pop());
            }
        }
        newArray.push(strArray[i]);
    }
    return answer;
}