let auto = {
  Manufacturer: 'Mercedes',
  Model: 'c550',
  Year: 2012,
  Average_speed: 140,
  Fuel_tank: 70,
  Average_fuel_consumption: 10,
  Drivers: '',
}

str = JSON.stringify(auto, null, 4)

alert(str)

//

function addDriver() {
  let newDriver = prompt('Enter the name driver')
  auto.Drivers += newDriver
  str = JSON.stringify(auto, null, 4)
}

addDriver()

alert(str)

//

function addGas() {
  let gas = +prompt('Enter еhe amount of gasoline')
  auto.Fuel_tank += gas
  str = JSON.stringify(auto, null, 4)
}

addGas()

alert(str)

//

let distance = prompt('Enter the distance to the destination')
let nameDriver = prompt("Enter the driver's name for the trip")

function calcTime(el1, el2) {
  let time = el1 / auto.Average_speed
  let consumption = el1 / 10
  if (el2 != auto.Drivers) {
    alert('This driver is not allowed to drive this car')
  } else if (consumption > auto.Fuel_tank) {
    alert('Not enough fuel for your trip, do you want to refuel?')
  } else {
    alert(`You will reach your destination in ${time.toFixed(1)} hours`)
  }
}

calcTime(distance, nameDriver)
