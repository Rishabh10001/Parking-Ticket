export class Vehicle 
{
    constructor(owner , number)
    {
        this.id = "REG -"+(new Date()).getTime()
        this.owner = owner
        this.number = number
    }
}