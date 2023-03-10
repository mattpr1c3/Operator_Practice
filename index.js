let id = 0;
let firstName = "Jonny";
let lastName = "BeGood";
let firstName2 = "Bob";
let lastName2 = "Sagget";

// create a function that creates a new ID and places first name and last name together
//parameters at the declaration, arguments at the invocation (calling te function)
function createId(firstName, lastName) {
    console.log("with concatenation " + firstName + " " + lastName);
    console.log(`with template literals: ${firstName} ${lastName}`);
    console.log(++id);
}

createId(firstName, lastName);
createId(firstName2, lastName2);