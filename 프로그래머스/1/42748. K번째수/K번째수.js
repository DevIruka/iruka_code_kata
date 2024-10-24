function solution(array, commands) {
    let answer = [];
    for (const commandList of commands) {
        let newArray = array.slice(commandList[0] - 1, commandList[1]);
        newArray.sort((a, b) => a - b)
        answer.push(newArray[commandList[2]-1])
    }
    return answer
}