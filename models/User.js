class User {
    email = '';
    password = '';
    name = ''
    gender = '';
    phone = '';
    constructor(email,password,name,gender,phone){
        this.email = email;
        this.password = password;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
    }
}

export default User