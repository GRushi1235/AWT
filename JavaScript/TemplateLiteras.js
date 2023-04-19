let pname="mobile"
let price=15999
let status = "pending"
let discription = "I have ordered a "+pname+" for "+price+" from amazon "
console.log(discription)
//for printing in double courts
let dis = "I have ordered a "+pname+" for "+price+" from \"amazon\" "
console.log(dis)

//back tic

pname = "laptop"
price = "60999"

let disc = `I have purchased a ${pname} from "Amazon" for the price of ${price}`
console.log(disc)

//Adv of backtic is press enter to print in new line eg 
let out = `I have purchased a ${pname} from 
"Amazon" for the price 
of ${price}`
console.log(out)

//function can also be used in back tick
function est(){
    return "11-2-2023"
}

let disc1 =`I have purchased a ${pname} from "Amazon" for the price of ${price} the Estimated delivery date is ${est()}`
console.log(disc1)

let prostatus =`is ${status==='delivered' ? 'green':'red'}`

let disc3 =`I have purchased a ${pname} from "Amazon" for the price of ${price} the Estimated delivery date is ${est()} and  status ${prostatus} `
console.log(disc3)
