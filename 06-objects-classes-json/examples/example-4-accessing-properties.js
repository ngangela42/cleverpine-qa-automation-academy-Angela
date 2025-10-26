let apiResponse = {
    statusCode: 200, 
    message: "Success",
    data: "User Created", 
    responseTime: 245,
};

console.log("Status code:", apiResponse.statusCode);
console.log("Message:", apiResponse["message"]);

let propertyName = "responseTime";
console.log("Dynamic access:", apiResponse[propertyName]);

let testConfig = {
    "max-timeout": 5000,
    "retry-count:": 3, 
    "base url": "https://test.example.com",

};

console.log("Max timeout:", testConfig["max-timeout"]);
console.log("Base URL:", testConfig["base url"]);

