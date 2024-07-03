let lowerCase = function(str){
    return str.toLowerCase();
}

let upperCase = function(str){
    return str.toUpperCase();
}

let transformer = function(str,fun){
    return fun(str)
}

console.log(transformer("Priyanka",upperCase))
console.log(transformer("Priyanka",lowerCase))