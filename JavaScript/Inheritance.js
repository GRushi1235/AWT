class person{
    constructor (name){
        this.name="Rushi"
    }
    print(){
        console.log(this.name)
    }
}
const p = new person();
p.print()
console.log()
//inheritance

class persons{
    constructor(name,age){
        this.name="Rahil"
        this.age=22
    }

    print(){
        console.log(this.name)
        console.log(this.age)
    }
}

class add extends persons{
    constructor(){
        super();
        this.address="Telangana,India"
    }

    printadd(){
        console.log(this.address)
    }
}

const p1 = new add();
p1.print()
p1.printadd()