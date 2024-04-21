class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}deepak`
    }

    set password(value){
        this._password = value
    }
}

const deepak = new User("deepak@shukla.ai", "abc")
console.log(deepak.email);