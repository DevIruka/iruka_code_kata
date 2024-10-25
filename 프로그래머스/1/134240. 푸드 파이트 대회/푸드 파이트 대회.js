function solution(food) {
    let halfArray = [];
    for (let i = 1; i < food.length; i++) {
        if (food[i] % 2 === 0) {
            for (let j = 0; j < food[i] / 2; j++) {
                halfArray.push(i);
            }
        }

        if (food[i] % 2 !== 0) {
            for (let k = 0; k < Math.floor(food[i] / 2); k++) {
                halfArray.push(i);
            }
        }
    }
    let reversedArray = [...halfArray].reverse();
    halfArray.push(0);
    const answerArray = halfArray.concat(reversedArray);
    return (answer = answerArray.join(""));
}