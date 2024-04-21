// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.deepak = function(){
    console.log(`deepak is present in all objects`);
}

Array.prototype.heyDeepak = function(){
    console.log(`Deepak says hello`);
}

// heroPower.deepak()
// myHeros.deepak()
// myHeros.heyDeepak()
// heroPower.heyDeepak()

// inheritance

const User = {
    name: "pappu",
    email: "pappu@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"deepak".trueLength()
"iceTea".trueLength()