// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
//  console.log(cohort.split(""))

// a) Your answer: "H","0","t","e","l", , "2","0","2","2"
// b) Verify and explain: H', 'o', 't', 'e', 'l', ' ', '2', '0','2', '2', 
// i was almost right, the result came back with apostrophe and not quotation. the .split() built in method takes what is in a array and splits it into individual strings. 

// --------------------2) What will this log?

const greeter = (name) => {
 `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student!
// b) Verify and explain: undefined, the reason that this came back as undefined it becasue there is not return on line 20. I tested it and it will log "Hello LEARN Student" if you add the return. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//  console.log(multipliedByTwo)

// a) Your answer:undefined or error? 
// b) Verify and explain: [ 8, 10, 12, 14, 16 ] , .map() is the built in function that creates a new array the same length as the previous and does not effect the original graph. the original array values are then multiplid by 2 and out into a new array. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: [11, 13, 15]
// using .filter() they are creating a new array, using (  % 2 !==0) they are taking all numbers that are odd.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: ["JavaScript"]
// b) Verify and explain: JavaScript
// when accessing through objects you have to dot to each one. (myCodingSkills.languages[]) the zero is the index that the requested value is at. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:student = "George" cohort = Hotel year = 2022
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022 }
//i forgot to put it down as a learn class and inside of curly braces. it created a new class with george as the value. it out george into the name object of the class. it was the only new information given so it only changed that one. 