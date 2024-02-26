function solve(input) {
    let sum = 0
    let lastDigit = 0
    let number = Math.floor(input / 10)
    let currNumber = number % 10
    let falseCount = 0
    while (input > 0) {
       lastDigit = input % 10
       sum += lastDigit
       input = Math.floor(input / 10)
       if (lastDigit != currNumber) {
        falseCount++
       } 
    }
    if (falseCount > 0) {
        console.log(false)
    } else {
        console.log(true)
    }
    console.log(sum)
}
   