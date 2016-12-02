var employee = {
	name: 'John',
	age: 25,
	salary: 50000,
	address: {
		city: 'Bangalore',
		state: 'Karnataka',
		pincode: '560071'
	}
}

console.log("Name: " + employee.name + "\n" + "Age: " + employee.age + "\n" + "Salary: " + employee.salary + "\n" + "Address: \n" + "City: " + employee.address.city + "\n" + "State: " + employee.address.state + "\n" + "Pincode: " + employee.address.pincode + "\n");
console.log("Name: " + employee.name + "\n" + "Age: " + employee.age + "\n" + "Salary: " + employee.salary + "\n" + "Address: " + employee.address.city + "," + employee.address.state + "," + employee.address.pincode);
