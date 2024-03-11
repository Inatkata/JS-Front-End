function solve(input) {
    let oddNumbers = input.filter(num => num % 2 !== 0)
    let evenNumbers = input.filter(num => num % 2 === 0)

    let oddSum = oddNumbers.reduce((a, b) => a + b, 0)
    let evenSum = evenNumbers.reduce((a, b) => a + b, 0)
    console.log(evenSum - oddSum)
}
// function solve2(number) { 
//let result = numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum - num, 0)
//console.log(result)
//}