class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
        addCourse(){
            console.log(`A new course was added by ${this.username}`);
        }
    
}
const deepak = new Teacher("deep","deep@gmail.com","143");
deepak.addCourse()
const shukla = new User("shukla");
shukla.logMe()
console.log(deepak instanceof User);

