export default class user {
    constructor(newUser) {
        let { username, pass, name, email, number, role } = newUser
        this.username = username;
        this.pass = pass;
        this.name = name;
        this.email = email;
        this.number = number;
        this.role = role || 0;

    }

}