/**

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


*/

const { log, time, timeEnd } = console;

function getSum(a, b) {
    if (a === b) {
        return a;
    }
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

let a1 = getSum(0, -1),
    a2 = getSum(0, 1),
    a3 = getSum(2, 2),
    a4 = getSum(5, -1),
    a5 = getSum(581, 357)

log(a1);
log(a2);
log(a3);
log(a4);
log(a5);
