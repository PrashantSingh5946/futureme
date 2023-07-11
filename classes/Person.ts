
class Person {
    fs = require('fs');
    email;
    messages;
    name;


    constructor(email: String, name: String, messages: Array<String>) {
        this.email = email;
        this.messages = messages;
        this.name = name;
    }

    public store() {
        const filedata = this.fs.readFileSync('data.json');
        const data =  JSON.parse(filedata);
        data.push({"email" : this.email, "messages" : this.messages, "name" : this.name})
        this.fs.writeFileSync('data.json');
    }




}

export default Person;

