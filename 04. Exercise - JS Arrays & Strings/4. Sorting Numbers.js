function solve(numbers) {
    const sortedNums = numbers
    .sort((a, b) => a - b)
    const result = []
    while(sortedNums.length > 0) {
        let firstNum = sortedNums.shift()
        let lastNum = sortedNums.pop()

        result.push(firstNum)
        if(lastNum) {
            result.push(lastNum)
        }
    }
   return result 
}