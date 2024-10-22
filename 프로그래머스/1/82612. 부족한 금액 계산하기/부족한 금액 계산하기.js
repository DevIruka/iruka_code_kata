function solution(price, money, count) {
    let answer = 0;
    for (i = 1; i <= count; i++) {
        money -= price * i;
    }
    if (money < 0) {
        return (answer = money * -1);
    } else {
        return answer = 0
    }
}