function solve(people, typeOfGroup, day) {
    let price
    if (typeOfGroup == 'Students') {
        if (day == 'Friday') {
            price = people * 8.45
        } else if (day == 'Saturday') {
            price =  people * 9.80
        } else if (day == 'Sunday') {
            price =  people * 10.46
        }
        if (people >= 30) {
            price = price * 0.85
        }
    } else  if (typeOfGroup == 'Business') {
        if (day == 'Friday') {
            price =  people * 10.90
        } else if (day == 'Saturday') {
            price =  people * 15.60
        } else if (day == 'Sunday') {
            price =  people * 16.00
        }
        if (people >= 100) {
            price -= 10 * price / people;
        }
    } else  if (typeOfGroup == 'Regular') {
        if (day == 'Friday') {
            price =  people * 15.00
        } else if (day == 'Saturday') {
            price =  people * 20.00
        } else if (day == 'Sunday') {
            price =  people * 22.50
        }
        if (people >= 10 && people <= 20) {
            price = price * 0.95
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}