//alert("Hello, tis' I, app.js!")

const name = 'John';
const age = 25;
const job = "Software Developer";
const city = "Tallinn";

function hello(){
    return "trans rights"
}

//let html = '<ul><li>Name:' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

//template literal

let html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>John says: ${hello()}</li>
    </ul>
`;

document.body.innerHTML = html;
/*
//get the data type of John's job
console.log(typeof(job));
//get the data type of John's age
console.log(typeof(age));

//arrays
const numbers1 = [1,2,3,4,5];
console.log(numbers1);
console.log(typeof(numbers1));

const numbers2 = new Array(6,7,8,9,10);
console.log(numbers2);
console.log(typeof(numbers2));
//foreach loop

numbers2.forEach(number => {
    console.log("Let's count: " + number);
});
*/
const mixedArray = [22, "banana", true];

mixedArray.forEach(thingie => {
    console.log("The current element is: " + thingie + ". It is a " + typeof(thingie) + ".");
});

//the length of the string element
console.log("Banana is " + mixedArray[1].length + " characters long");
console.log("");

//add elements to an array
mixedArray.push("apple");
mixedArray.forEach(thingie => {
    console.log("The current element is: " + thingie + ". It is a " + typeof(thingie));
});
console.log("");

//add an element to the beginning of an array
mixedArray.unshift(1000);
mixedArray.forEach(thingie => {
    console.log("The current element is: " + thingie + ". It is a " + typeof(thingie));
});
console.log("");

//delete the last element
mixedArray.pop();

//delete the first element
mixedArray.shift();
mixedArray.forEach(thingie => {
    console.log("The current element is: " + thingie + ". It is a " + typeof(thingie));
});
console.log("");

//remove an element from a certain position
mixedArray.splice(1,1); //splice(startfromposition, how many to remove)
mixedArray.forEach(thingie => {
    console.log("The current element is: " + thingie + ". It is a " + typeof(thingie));
});
console.log("");

//Objects literals
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john.doe@gmail.com",
    hobbies: ['music', 'sports'],
    
    getYearOfBirth: function() {
        return 2019-this.age;
    }
}

let val;
val = person;
val = person.firstName;
val = person.lastName;
val = person['lastName'];
val = person.hobbies[1];
val = person.getYearOfBirth();
console.log(val);

const people = [
    {name: "Joe", age: 25},
    {name: "Mama", age: 29},
    {name: "Odysseus", age: 12}
]

people.forEach(person => {
    console.log(person.name, "is", person.age, "years old.");
})