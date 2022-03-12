import { Request, Response, NextFunction } from 'express';
import {client1} from "../Database/connectDB";







export const addItem=async(req : Request):Promise<any>=>{
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

// export const updateItem=async(req : ):Promise<>=>{
//     return new Promise(async(resolve,reject)=>{
//         try
//         {

//         }     
//         catch(error:any)
//         {
            
//             return reject(error);
//         }
//     })
// }

// export const showItem=async(req : ):Promise<>=>{
//     return new Promise(async(resolve,reject)=>{
//         try
//         {

//         }     
//         catch(error:any)
//         {
            
//             return reject(error);
//         }
//     })
// }

// export const showAll =async(req :any ):Promise<void>=>{
//     return new Promise(async(resolve,reject)=>{
//         try
//         {

//         }     
//         catch(error:any)
//         {
            
//             return reject(error);
//         }
//     })
// }

// export const deleteItem =async(req : ):Promise<>=>{
//     return new Promise(async(resolve,reject)=>{
//         try
//         {

//         }     
//         catch(error:any)
//         {
            
//             return reject(error);
//         }
//     })
// }