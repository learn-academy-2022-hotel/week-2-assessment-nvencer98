// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }

// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

describe ("math",() => {
    it("return answer", () => {
        expect(math(object1.number)).toEqual("15 is divisible by three")
        expect(math(object2.number)).toEqual("0 is divisible by three")
        expect(math(object3.number)).toEqual("-7 is not divisible by three")
    })
})





//psuedo code: 
// create a test function wiht expect funcitons.
//name the test using descrive 
//using it and expect create the test you want the values to go through. 
// test the test 
//create functin for values to pass through. 


 
const math = (value) => {
    if (value % 3 === 0){
    return `${value} is divisible by three`
    }
    else {
    return `${value} is not divisible by three`

}
}
console.log(math(object1.number))




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

describe ("returnCap", () => {
    it("should return the array capitilized", () => {
    expect(returnCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
     expect(returnCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
})
})

const returnCap = (value1) => {
    
    return value1.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    })
}



//psuedocode:
// create a test for my arrays to pass, use decribe " returnCap" , it "should return the array capitilized", expect.
// create the function to make it work
// i will have to use map to make a new array, then return that array with charAt(0) to access the first place in array and only capitolize that.
// use slice(1) to keep the rest lowercase not sure if needed---






// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.


describe ("cat",() => {
    it ("checks amount of vowels", () => {
        expect(cat(vowelTester1)).toEqual(1)
        expect(cat(vowelTester2)).toEqual(0)
        expect(cat(vowelTester3)).toEqual(2)

    })
})
const cat = (value) => {
  return  value.search(/["a","e","i", "o", "u", "A" ,"E", "I", "O", "U"]/)
}

// psuedo code: 
//use decribe "cat" and make the test using it "checks amount of vowels" and expect
// make a function that takes in my values and returns it with the first instance of a vowel
//vowels are a,e,i,o,u 
// when makin my return in my function i need to use .search() and give it my vowels in upper and lowercase so it will search the value for those specific letters.