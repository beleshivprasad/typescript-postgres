const {Client}=require('pg')
//import Client from 'pg';
require("dotenv").config();


export const client1:any=new Client({
host:process.env.dbHOST,
port:process.env.dbPORT,
user:process.env.dbUSER,
password:process.env.dbPASSWORD,
database:process.env.dbDATABASE
})

export  function connectDB() {
    client1.on("connect",()=>{
       ;
         console.log("connected to postgres");
     });
     
     client1.on("error", (err:any) => {
         console.log("this is error", err);
       });
       client1.connect();
}

