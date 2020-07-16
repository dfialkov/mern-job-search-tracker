I've removed the keys file. To run this locally, create a file called keys.js with the following contents:

module.exports = {
    mongoURI: "example",
    secretOrKey: "secret"
}

and replace "example" with your mongoDB connection URI

There are some keys exposed in previous commits. None of them work, don't waste your time. 