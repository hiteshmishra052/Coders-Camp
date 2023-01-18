import mysql from "mysql"

export const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password: "hiteshmishra1*",
    database: "social",
})