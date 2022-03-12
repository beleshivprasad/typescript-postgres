import { Request, Response, NextFunction } from 'express';
import * as adminServices from "../Services/vendorServices"
import { v4 as uuidv4 } from "uuid";
import {RESPONSE_STATUS} from '../constants'

import { client1 } from '../Database/connectDB';
import {text} from '../model/productModel'










export let addItem:Function=async(req:Request,res:Response):Promise<any>=>{
    try
    {
        const product_id:any = uuidv4();
       client1.query(text,(err:any ,data:any)=>{
             if(err)
             {
                 console.log("Table creation feild",err)
             }
             console.log("Tabe created successully");
       })
       client1.query(`INSERT INTO Products (products_id,product_name,brand_name,price,catogery,sub_catogery) VALUES(${product_id},${req.body.product_name},${req.body.brand_name},${req.body.price},${req.body.catogery},${req.body.sub_catogery})`,(err:any ,data:any)=>{
            if(err)
            {
                console.log(err);

            } 
            res.status(201).json({data});             
       })
       
            
    }
    catch(err:any)
    {
    }
}

export let updateItem:Function=async(req:Request,res:Response):Promise<void>=>{
    try
    {
       
            
    }
    catch(err:any)
    {
    }
}
export let showItem:Function=async(req:Request,res:Response):Promise<void>=>{
    try
    {
       
            
    }
    catch(err:any)
    {

    }
}
export let showAll:Function=async(req:Request,res:Response):Promise<void>=>{
    try
    {
       
            
    }
    catch(err:any)
    {
    }
}

export let deleteItem:Function=async(req:Request,res:Response):Promise<void>=>{
    try
    {
       
            
    }
    catch(err:any)
    {
    }
}



