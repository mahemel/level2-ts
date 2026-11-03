type Status = "pending" | "approved" | "rejected";

const someStatus: string = "approved";

const showStatus = (status: Status) => {
    console.log("Status:", status);
};

showStatus(someStatus as Status); // Type assertion needed
