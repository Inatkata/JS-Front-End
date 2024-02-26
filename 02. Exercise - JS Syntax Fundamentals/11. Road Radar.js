function solve(speed, environment) {
    let speedLimit = 0
    let status = ''
    if (environment == 'motorway') {
        speedLimit = 130
    } else if (environment == 'interstate'){
        speedLimit = 90
    } else if (environment == 'city'){
        speedLimit = 50
    } else if (environment == 'residential'){
        speedLimit = 20
    }
    if ((speed > speedLimit) && (speed <= speedLimit + 20)) {
        status = 'speeding'
    } else if ((speed > speedLimit) && (speed <= speedLimit + 40)) {
        status = 'excessive speeding'
    } else if (speed > speedLimit + 40) {
        status = 'reckless driving'
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        return
    }
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
}