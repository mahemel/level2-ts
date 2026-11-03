const greetings = () => {
    console.log("Hello, Programming World!");
};

// greetings();

// Literal type
type Status = "pending";
const status: Status = "pending";

//Basic Union
type Identity = string | number; // string or number
const id: Identity = 123;

console.log(id);

// Literal Union
type Role = "user" | "admin" | "manager";
const userRole: Role = "admin";

console.log(userRole);

type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; membership: string[] };

type User = Admin | Member;

const user: User = {
    id: 1,
    role: "admin",
    privileges: ["create", "read", "update", "delete"],
};
