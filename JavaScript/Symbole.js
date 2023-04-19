// The Symbol is newly introduced datatype in ES6
// It is a primitive datatype which means Symbol cannot be instantiated
// unmuttable

let name = Symbol("Rushi")
const age = Symbol(20)

console.log(`Type of name is ${typeof(name)}`)
console.log(`Type of name is ${typeof(age)}`)

console.log(`name == age ${name==age}`)

let user = {
        id : 12345,
        name : 'cvrit',
        city : 'hyderabad',
        age : 30
    };
    const idsym = Symbol('id');
    user[idsym] = 987654321;

    console.log(user)