function solve(a, b, c){
   //console.log(Math.min(a, b, c))
   const result = mathMin([a, b, c])

   console.log(result)

   function mathMin(numbers) {
    let minNumber = Number.MAX_SAFE_INTEGER

    for (const number of numbers) {
        if (minNumber > number) {
            minNumber = number
        }
    }
    return minNumber
   }
}