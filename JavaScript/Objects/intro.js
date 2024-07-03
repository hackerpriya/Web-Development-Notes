let car = { 
	color : "black",
	model : "2022",
	company : "Honda"
}
console.log(car);

// Accessing the Javascript Object Properties.
console.log(car["company"])
console.log(car.model)

// Modifying Object Properties
car.color = "Red";
car["model"] = "2023"
console.log(car.color);
console.log(car.model);

// Deleting Object Properties
let returnvalue = delete car.company;
console.log(car.company,returnvalue);
