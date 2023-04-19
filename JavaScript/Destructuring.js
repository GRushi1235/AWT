const details = {
    firstname:"G RUSHI",
    Lastname: "BHARGAV",
     address:{
        city:"HYDERABAD",
        country:"INDIA"
    }
}
const {Lastname,address} = details;
const name = details.firstname
console.log(name)
console.log(Lastname)
console.log(address)
console.log()
const user = {
    firstname:"Rahil",
    Lastname:"Abdul",
    address:{
        city:"Hyderabda",
        state:"Telangana",
        }
}

const {firstname,Lastname:lname,age=10,address:add} = user
console.log(firstname)
console.log(lname)
console.log(age)
console.log(add)
console.log()
// rest parameter

const login ={
    fullname:"A Varshith",
    age:21,
    add:{
        country:"India",
        State:"Telangana",
        area:"Hyderabad",
        pincode:500017
    },
    Credential :{
        userid:"varshith@123",
        password:"Avarshith@cvr"
    }
}

const {fullname,...others}=login
    console.log(fullname)
    console.log(others)


    