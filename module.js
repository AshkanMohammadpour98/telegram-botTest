let myAge = 25
let myName = 'ashkan'

function coding(){
    console.log('is coding ...');
}

// module.exports.myName = myName
// module.exports.myAge = myAge
// module.exports.coding = coding

export {
    myAge ,
    myName 
}
export default coding