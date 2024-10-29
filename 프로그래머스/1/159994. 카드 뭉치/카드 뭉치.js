function solution(cards1, cards2, goal) {
    for (const words of goal) {
        if (words === cards1[0]) {
            cards1.shift();
        } else if (words === cards2[0]) {
            cards2.shift();
        } else {
            return "No";
        }
    }
    return "Yes";
}