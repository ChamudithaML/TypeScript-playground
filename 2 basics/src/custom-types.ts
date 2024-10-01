// using enums
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
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
    status: ContactStatus.Active
}

let myAddres: Address = {
    line1: "s",
    line2: "w",
    province: "south",
    region: "SL",
    postalCode: "81K"
}

