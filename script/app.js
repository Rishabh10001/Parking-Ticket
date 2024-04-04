import { Student } from "./User/Student.js";
import { Faculty } from "./User/Faculty.js";
import { Cycle } from "./Vehicle/Cycle.js";
import { Bike } from "./Vehicle/Bike.js";
import { Car } from "./Vehicle/Car.js";
import { DailyPass } from "./Pass/DailyPass.js"
import { MonthlyPass } from "./Pass/MonthlyPass.js"
import { YearlyPass } from "./Pass/YearlyPass.js"

const users = []
const vehicles = []
const passes = []

document.addEventListener("DOMContentLoaded", () => {
    let userSubmitButton = document.getElementById("userSubmitButton")
    userSubmitButton.addEventListener('click', registerUser)

    let vehicleSubmitButton = document.getElementById("vehicleSubmitButton")
    vehicleSubmitButton.addEventListener('click', registerVehicle)
})

const registerUser = (e) =>{
    e.preventDefault()
    let userName = document.getElementById('userName').value
    let userContact = document.getElementById('userContact').value
    let userRole = document.getElementById('userRole').value

    let user = null
    switch(userRole)
    {
        case 'student' :
            user = new Student(userName , userContact)
            break;
        case 'faculty' :
            user = new Faculty(userName , userContact)
            break;
    }

users.push(user)
console.log(users)
}


const registerVehicle = (e) =>{
    e.preventDefault()
    let owner = users[users.length - 1]
    let number = document.getElementById('number').value
    let type = document.getElementById('type').value

    let vehicle = null
    switch(type)
    {
        case 'cycle' :
            vehicle = new Cycle(owner,number)
            break;
        case 'bike' :
            vehicle = new Bike(owner,number)
            break;
        case 'car' :
            vehicle = new Car(owner,number)
            break;
    }

vehicles.push(vehicle)
console.log(vehicles)
showPassChoice(vehicle)
}


const showPassChoice = (vehicle) => {
    let dailyPass = new DailyPass(vehicle)
    let monthlyPass = new MonthlyPass(vehicle)
    let yearlyPass = new YearlyPass(vehicle)

    let passChoice = document.getElementById('passChoice')

    let dailyButton = document.createElement('INPUT')
    dailyButton.setAttribute('type','button')
    dailyButton.value = "Daily :"+ dailyPass.price 
    dailyButton.addEventListener('click',() => {
        passes.push(dailyPass)
        dailyPass.print()
    })
    passChoice.appendChild(dailyButton)

    let monthlyButton = document.createElement('INPUT')
    monthlyButton.setAttribute('type','button')
    monthlyButton.value = "Monthly :"+ monthlyPass.price ;
    monthlyButton.addEventListener('click',() => {
        passes.push(monthlyPass)
        monthlyPass.print()
    })
    passChoice.appendChild(monthlyButton)

    let yearlyButton = document.createElement('INPUT')
    yearlyButton.setAttribute('type','button')
    yearlyButton.value = "Yearly :"+ yearlyPass.price ;
    yearlyButton.addEventListener('click',() => {
        passes.push(yearlyPass)
        yearlyPass.print()
    })
    passChoice.appendChild(yearlyButton)
}