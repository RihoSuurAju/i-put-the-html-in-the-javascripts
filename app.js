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

const mixedArray = [22, "banana", true];

mixedArray.forEach(thingie => {
    console.log("The current element is: " + thingie);
    console.log("It is a " + typeof(thingie));
});

//the length of the string element
console.log("Banana is " + mixedArray[1].length + " characters long");

//add elements to an array
