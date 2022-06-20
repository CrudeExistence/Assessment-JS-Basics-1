// Here is the password validator code requested

// This commented out line is the way I would go about getting the guests name before welcoming them to the password checker.
// let user = prompt("Hello friend. What is your name? ")
let user = "Fred"

console.log(`Welcome, ${user}. This is a password validator tool here to assist you in verifying that your password meets minimum requirements and is secure enough to use.`)

let password = prompt("Please type the password you would like to test: ")

// The commented out lines below are for testing purposes. This is also because prompt isn't a environmentally accepted format within Node / Visual Studio without having to download and install additional programs or features at this time and it would require writing out the password multiple times in order to test different results.
// let password = "ThereAreAtLeastTenLettersHere"
// let password = "CorrectLength"
// let password = "CorrectLength1"


// This section of code is what was asked for in the test. It's commented out to showcase the changes and improvements without leaving out what the initial project was. 
//
// if (password.length >= 10) {
//     console.log('Success!')
// } else if (password.length < 10) {
//     console.log("This password isn't long enough.")
// } else {
//     console.log("I think we took a wrong turn at Albuquerque.")
// }
//

if (password.length) {
    if (password.length >= 10 && password.length <= 15 && password.match(/[0-9]/g)) {
        console.log('Success!')
        console.log("\n▄█     █▄   ▄█  ███▄▄▄▄   ███▄▄▄▄      ▄████████    ▄████████ \n███     ███ ███  ███▀▀▀██▄ ███▀▀▀██▄   ███    ███   ███    ███ \n███     ███ ███▌ ███   ███ ███   ███   ███    █▀    ███    ███ \n███     ███ ███▌ ███   ███ ███   ███  ▄███▄▄▄      ▄███▄▄▄▄██▀ \n███     ███ ███▌ ███   ███ ███   ███ ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   \n███     ███ ███  ███   ███ ███   ███   ███    █▄  ▀███████████ \n███ ▄█▄ ███ ███  ███   ███ ███   ███   ███    ███   ███    ███ \n ▀███▀███▀  █▀    ▀█   █▀   ▀█   █▀    ██████████   ███    ███ \n                                                    ███    ███")
    } else if (password.length < 10 || password.length > 15) {
        console.log("This password isn't long enough or is too long. Remember your password should be between 10-15 characters.")
    } else if (password.length >= 10 && password.length <= 15 && password.match(/[0-9]/g) === null) {
        console.log("The password needs at least one number in it to be secure. This is not a secure password.")
    } else {
        console.log("I think we took a wrong turn at Albuquerque.")
    }
}