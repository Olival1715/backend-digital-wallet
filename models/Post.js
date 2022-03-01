const db = require('../config/db');

class Post {
    constructor(firstname, lastname, balance) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.balance = balance;
    }

     save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO students(
            firstname,
            lastname,
            balance,
            date
        )
        VALUES(
            '${this.firstname}',
            '${this.lastname}',
            '${this.balance}',
            '${createdAtDate}'
        )
        `;

        return db.execute(sql);

        return newPost;

    }

    static findAll(){
        let sql = "SELECT * FROM students;";

        return db.execute(sql);

    }

    static findById(id){
        let sql = `SELECT * FROM students WHERE id = ${id};`;

        return db.execute(sql);

    }

}

module.exports = Post;