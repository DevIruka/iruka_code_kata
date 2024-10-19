function solution(x) {
    // 자릿수를 더하는 로직.
    let arrayX = [...String(x)].map((nums) => {
        return Number(nums);
    });
    let addedNum = 0
    arrayX.forEach((element) => {
        addedNum += element
    });
    console.log(addedNum)
    // 하샤드 수인지 확인하는 조건문.
    return x % addedNum === 0 ? true : false
}