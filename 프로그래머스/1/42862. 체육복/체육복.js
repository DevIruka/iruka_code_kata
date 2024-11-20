function solution(n, lost, reserve) {
    let answer = n
    lost.sort((a,b) => a-b)
    reserve.sort((a,b)=> a-b)
    for (const reserveOne of reserve) {
        if(lost.includes(reserveOne)) {
            lost = lost.filter((element) => {
                return element !== reserveOne
            })
            reserve = reserve.filter((element) => {
                return element !== reserveOne
            })
        }
    }
    let lostCount = lost.length
    for(const lostOne of lost) {
        for(const reserveOne of reserve) {
            if(lostOne + 1 === reserveOne || lostOne - 1 === reserveOne) {
                lostCount = lostCount - 1
                reserve.shift()
            }
        }
    }
    answer = answer - lostCount
    return answer;
}