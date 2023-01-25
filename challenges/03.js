/**
 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
 For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/


const { log, time, timeEnd } = console;

function sumTwoSmallestNumbers(numbers) {
    const res = numbers.sort((a, b) => a - b)
    return res[0] + res[1];
}

let an1 = sumTwoSmallestNumbers([5, 8, 12, 19, 22]),
    an2 = sumTwoSmallestNumbers([15, 28, 4, 2, 43]),
    an3 = sumTwoSmallestNumbers([3, 87, 45, 12, 7]),
    an4 = sumTwoSmallestNumbers([23, 71, 33, 82, 1]),
    an5 = sumTwoSmallestNumbers([52, 76, 14, 12, 4])

log(an1)
log(an2)
log(an3)
log(an4)
log(an5)