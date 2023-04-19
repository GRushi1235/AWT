function* names(){
    yield "abhi"
    yield "abhilash"
    yield "Suraj"
    yield "rushi"
    yield "shoaib"
    yield "Tharun"
    return "they all are idiots"
}
let name = names()
console.log(name.next())
console.log(name.next())
console.log(name.next())
console.log(name.next())
console.log(name.next())
console.log(name.next())
console.log(name.next())



// function* getNextId(){
//     let id =0;
//     while(id < 3)
//     yield id++;
// }
// let createUser = getNextId();
// console.log(createUser.next().value);
// console.log(createUser.next().value);
// console.log('OK, lets print next lines');
// console.log(createUser.next());
// console.log(createUser.next());