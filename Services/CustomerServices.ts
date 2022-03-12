import { Request, Response, NextFunction } from 'express';
import {client1} from "../Database/connectDB";



export const viewList=async(req :Request ):Promise<any>=>{
    return new Promise(async(resolve,reject)=>{
        try
        {

        }     
        catch(error:any)
        {
            
            return reject(error);
        }
    })
}

export const viewOne=async(req :Request ):Promise<any>=>{
    return new Promise(async(resolve,reject)=>{
        try
        {

        }     
        catch(error:any)
        {
            
            return reject(error);
        }
    })
}

export const OrderPlace=async(req : Request):Promise<any>=>{
    return new Promise(async(resolve,reject)=>{
        try
        {

        }     
        catch(error:any)
        {
            
            return reject(error);
        }
    })
}

export const OrderHistory=async(req : Request):Promise<any>=>{
    return new Promise(async(resolve,reject)=>{
        try
        {

        }     
        catch(error:any)
        {
            
            return reject(error);
        }
    })
}

