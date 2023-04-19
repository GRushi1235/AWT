//Synchronous
console.log("Hello")
name()
console.log("How are you")

function name(){
    for(i=0;i<999999999;i++);
    console.log("Rushi")

}
console.log()
console.log()

//Asynchronous
console.log("Hello")
print()
console.log(`The following are your marks
10,50,90,88`)

function print(){
    setTimeout(() => { 
        console.log("Rahil")
    }, 1000);
}
console.log()

//Synchronous --- Asynchronous
console.log("Hello admin")
Option()
console.log("Choose")

function Option(){
    setTimeout(() => {
        Show()
    }, 5000);
}

function Show(){
    for(i=0;i<55555555;i++);
        console.log('1.enter\n2.delete\n3.update\n4.display')
 
}