// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

const { log } = console;

function squareDigits(num) {
    if (num === 0) return 0;
    return +num.toString().split("").map(data => (+data * +data)).join("")
}


let an1 = squareDigits(3212)
let an2 = squareDigits(2112)
let an3 = squareDigits(0)

log(an1)
log(an2)
log(an3)