import "./App.css";

let name = "any tex with qua"; // string
let age = 10; //number
let arr = ["string array"]; //array
let bool = true; // boolean
let obj = { key: "value" }; // object

function Greet(name, age) {
  console.log(`Good day ${name}, you are ${age} years old`);
  console.log("Good day" + name + ", you are" + age);
  return <p>{`Good day ${name}, you are ${age} years old`}</p>;
}

// Create function named addToghter takes 2 params of type number add the two params togther and console logs it the total to the screen
function addTogether(firstval, secondval) {
  console.log(`first value is ${firstval}, second is ${secondval} `);
  let total = firstval + secondval;
  console.log(total);
  return <p>{`${firstval} + ${secondval} = ${total}`}</p>;
}

// Practical Self Study answers
function Q1() {
  const name = "bianca";
  const age = 28;
  const dob = "9 July 1993";
  const fave = "purple";
  return <p>{`My name is ${name} I am ${age} years old. I was born on ${dob}. My fav color is ${fave}`}</p>;
}

function Q2(val1, val2) {
  let arr = [];
  for (let i = 0; i < val1; i++) {
    arr.push(val2);
  }
  return arr;
}

function Q4() {
  return <h1>DONE</h1>;
}

function App() {
  return (
    <div className='App'>
      <h1>Hello world</h1>
      {Greet(name, age)}
      {/*  Display the value of addToghter under a heading */}
      {addTogether(100, 2.5)}

      {/* Q3 */}
      <h2>Meet me </h2>
      {Q1()}

      <br />

      <ul>
        {Q2(10, "new Text").map((entry) => {
          return <li>{entry}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
