let compliment = function(msg){
    return function(name){
        return `${msg} ${name}`;
    }
}

// Calling method 1
console.log(compliment("You are a good coder")("Priyanka"))

// Calling method 2
let complimented = compliment("You are a good coder")
console.log(complimented("Priya"))