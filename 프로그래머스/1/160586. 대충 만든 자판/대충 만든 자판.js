function solution(keymap, targets) {
    let answer = [];
    for(const target of targets) {
        let maxminArray = []
    const targetArray = target.split('')
    for(const string of targetArray) {
        const indexArray = []
        for(const key of keymap) {
            const keyArray = key.split('')
            const index = keyArray.findIndex((element) => element===string)
            indexArray.push(index+1)
        }
        const filterdArray = indexArray.filter((index)=> index !== 0)
        maxminArray.push(filterdArray)
    }
    if (maxminArray.some(arr => arr.length === 0)) {
        answer.push(-1);
    } else {
    let answerElement = 0
    for(const maxmin of maxminArray) {
        const min = Math.min(...maxmin)
        answerElement += min
    }
    answer.push(answerElement)}
}
    return answer;
}