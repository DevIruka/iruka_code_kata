function solution(number, limit, power) {
    let answer = 0;
    const weaponArray = [];
    for (let i = 1; i <= number; i++) {
        let numOfDivisor = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                numOfDivisor++; 
                if (j !== i / j) numOfDivisor++; 
            }
        }
        weaponArray.push(numOfDivisor);
    }
    const limitedWeaponArray = weaponArray.map((weapon) => {
        if (weapon > limit) {
            return power;
        }
        return weapon;
    });
    limitedWeaponArray.forEach((weapon) => {
        answer += weapon;
    });
    return answer;
}