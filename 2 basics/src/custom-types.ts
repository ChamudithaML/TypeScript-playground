// using enums
enum ContactStatus {
    Active = "active", // if value to right side is not given the value of first name in enum will be 0. you can hover the mouse to see where enum is used
    Inactive = "inactive",
    New = "new",
}

interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date; // making optional by using ?
    status: ContactStatus;
}

// Type alias
// Custom aliases can be given to data types
type AddressPC = string

// Can give aliases for multiple types
type MultiType = string | number | Date

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: AddressPC; // usage of custom data alias
}

let primaryContact: Contact = {
    // birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    postalCode: "21",
    line1: "s",
    line2: "d",
    province: "p",
    region: "m",
    status: ContactStatus.Active   // hover on Active to see the value. if value is not assigned this will be 0
}

let myAddres: Address = {
    line1: "s",
    line2: "w",
    province: "south",
    region: "SL",
    postalCode: "81K"
}

