// Var keyword demonstration
console.log("Var keyword demonstration")
var x = 100
console.log("Inside the loop")
for(x=0;x<10;x++){
    console.log(x)
}
console.log("Outside the loop:"+x)
//let keyword demonstration
console.log("Let keyword demonstration")
var y = 100
console.log("Inside the loop")
for(i=1;i<=10;i++){
let y=i //now y is having block level scope
console.log(y)
}
console.log("Outside the loop:"+y)//here the variable y is having global scope so value will be 100
//const keyword demonstration
 console.log("const keyword demonstration")
 const k = 30
 console.log("Inside the loop")
 for(i=1;i<=10;i++){
     var m=i
     console.log(m)
 }
 console.log("Outside the loop:"+m)