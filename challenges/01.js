// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

const { log } = console;

function solution(str) {
    if (!str) return [];
    const temp = [];
    for (let i = 0; i < str.length; i += 2) {
        let val = str.slice(i, i + 2);
        if (val.length === 1) {
            val += "_"
        }
        temp.push(val)
    }
    return temp;
}

const an1 = solution("abcdef")
const an2 = solution("abcdefg")
const an3 = solution("")

log(an1)
log(an2)
log(an3)
