//We used (export) to allow id be accessed from outsidethe class
export class Goal {
    //The publickeyword is an Access modifier it determines where the properties of a class are visible. This allows the id and number to be visible anywhere outside the class.
    constructor(public id: number, public name: string, public description: string) {}
}
