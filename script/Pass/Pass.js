export class Pass
{
    constructor (vehicle , expiry , price)
    {
        this.id = "Pass -"+(new Date()).getTime()
        this.vehicle = vehicle
        this.expiry = expiry
        this.price = price
    }

print()
{
    let toBePrint = 
    `  
    <div>
    <h2>PASS</h2>
        <label for ="">Pass Id : </label>
        <label for ="">${this.id}</label>
    </div>
    <div>
        <label for ="">Vehicle Id : </label>
        <label for ="">${this.vehicle.number}</label>
    </div>
    <div>
        <label for ="">Owner Id : </label>
        <label for ="">${this.vehicle.owner.name}</label>
    </div>
    <div>
        <label for ="">Expiry Date : </label>
        <label for ="">${this.expiry}</label>
    </div>
    `
    let ticket = document.getElementById("ticket")
    ticket.innerHTML = toBePrint
}
}