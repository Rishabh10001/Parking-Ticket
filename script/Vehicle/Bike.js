import { Vehicle } from "./Vehicle.js"

export class Bike extends Vehicle
{
    constructor(owner,number)
    {
        super(owner,number)
        this.type="bike"
    }
}