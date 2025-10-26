let testUser1Name = "hohn.doe";
let testUser1Email = "john.doe@test.com";
let testUser1Password = "password123";
let testUser1Role = "admin";
let testUser1Active = true;


let testUser2Name = "jane.smith";
let testUser2Email = "jane.smith@test.com";
let testUser2Password = "securepass456";
let testUser2Role = "user";
let testUser2Active = false;

function validateUser1 () {
    return testUser1Email.includes("@") && testUser1Password.length >= 8;

}

function validateUser2 () {

return testUser2Email.includes("@")  && testUser2Password.length >= 8;

}

console.log("User 1 valid:", validateUser1);
console.log("User 2 valid:", validateUser2);