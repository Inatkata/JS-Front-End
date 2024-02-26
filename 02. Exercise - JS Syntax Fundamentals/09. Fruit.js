function solve(fruit, weight, pricePerKg ) {
    weight = weight / 1000
    let sum = pricePerKg * weight
    console.log(`I need $${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}