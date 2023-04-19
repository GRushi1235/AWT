//regular function
function add(x,y){
return x+y;
}
console.log(add(10,50))
//addition
const sum=(a,b)=>a+b
console.log(sum(90,55))
//multiplaction 
const mul=(a,b)=>a*b
console.log(mul(90,12.5))
//passing single parameter
const Sums = (x)=>x+9.5
console.log(Sums(9))
//passing object
const user=()=>({name:"Rushi",city:"Hydrabad"})
console.log(user().name)
console.log(user().city)
//one parameter
const name = (name)=> "Hello,"+name
console.log(name("Rushi"))
//Two parameter
const par=(name,age)=>"hello"+name+" "+age
console.log(par("Rushi",30))