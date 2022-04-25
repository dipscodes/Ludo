"use strict"

class Student {

	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	print() {
		console.log(this.name + " " + this.age + " : " + this.school);
	}

	printq() {
		console.log(Student.prototype);

		this.print();
	}
}
Student.prototype.school = "St Marks School";
const student1 = new Student("Rohan", 17);
let student2 = new Student("Shawn", 16);


let list = [0,1,2];

try {
	let c = list[3];
	console.log(list[4]);
} catch (error) {
	console.log("oops");
}

