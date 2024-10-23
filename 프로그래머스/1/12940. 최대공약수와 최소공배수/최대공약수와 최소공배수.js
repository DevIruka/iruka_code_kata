function solution(n, m) {
    // 최대공약수 (GCD) 계산
    const gcd = (a, b) => {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    // 최소공배수 (LCM) 계산
    const lcm = (a, b) => (a * b) / gcd(a, b);

    const gcdValue = gcd(n, m);
    const lcmValue = lcm(n, m);

    return [gcdValue, lcmValue];
}