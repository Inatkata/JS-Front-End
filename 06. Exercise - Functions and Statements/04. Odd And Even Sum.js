function solve(number) {

    const evenSum = calculateDigitSum(number, x => x % 2 === 0)
    const oddSum = calculateDigitSum(number, x => x % 2 !== 0)

function printResult(oddSum, evenSum) {
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
function calculateDigitSum(number, filter) {
        const sum = number
        .toString()
        .split('')
        .map(Number)
        .filter(filter)
        .reduce((acc, digit) => acc + digit, 0)

        return sum
}
printResult(oddSum, evenSum)
}

