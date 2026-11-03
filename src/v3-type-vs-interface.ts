type Id = number;

//interface Id = number; // Error: Duplicate identifier 'Id'.

type Role = "admin" | "user";

interface User {
    name: string;
    id: Id;
    role: Role;
}

const user: User = {
    id: 123,
    name: "John Doe",
    role: "admin",
};

// Todo: Interface
interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "Feline",
    breed: "Persian",
};

type Vehicle = {
    brand: string;
};
type Car = Vehicle & {
    model: string;
};

const car: Car = {
    model: "Corolla Axio",
    brand: "Toyota",
};
