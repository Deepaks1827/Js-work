class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
   static createId(){
        return `123`
    }
}
const raju = new User("deepak");
// console.log(raju.createId());

class Teacher{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("shukla","shukla@teacher.com")
console.log(iphone.createId());