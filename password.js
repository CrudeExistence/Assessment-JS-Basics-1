// Here is the password validator code reuqested

let user = "Fred"

console.log(`Welcome, ${user}. This is a password validator tool here to assist you in verifying that your password meets minimum requirements to keep you safe.`)

let password = prompt("Please type the password you would like to test: ")

// The line below is to test. This is because prompt isn't a environmentally accepted format within Node / Visual Studio without having to download and install additional programs or features at this time
// let password = "ThereAreAtLeastTenLettersHere"

if (password.length >= 10) {
    console.log('Success!')
} else if (password.length < 10) {
    console.log("This password isn't long enough.")
} else {
    console.log("I think we took a wrong turn at Albuquerque.")
}

