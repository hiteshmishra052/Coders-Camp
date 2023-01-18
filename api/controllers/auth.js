import { db } from "../connect.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    //check user if exists
    const q = "Select * from users where username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exists!")
        //create a new user 
        //hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT into users(`username`,`email`,`password`,`name`) values (?)"
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.")
        });
    });
};


export const login = (req, res) => {

    const q = "SELECT * from users where username = ?";

    db.query(q,[req.body.username],(err,data)=>{
        if (err) return res.status(500).json(err);
        if(data.length == 0) return res.status(404).json("User not found!");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if(!checkPassword) return res.status(400).json("Wrong password or username!")
 
        const token = jwt.sign({id:data[0].id},"secretkey");

        res.cookie("accessToken", token, {
            
        })

    });
};


export const logout = (req, res) => {

}