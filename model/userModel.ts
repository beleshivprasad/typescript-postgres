import { client1 } from "../database/connectDB";


export const create = async (query: any, ...values: any[]) => {
  try {
    const data:any = await client1.query(query, values);
    return true;
  } catch (error: any) {
    return error.stack;
  }
};
export const update = async (query: any, ...values: any[]) => {
  try {
    await client1.query(query, values);
    return true;
  } catch (error: any) {
    console.log("updateError", error.stack);
    return error.stack;
  }
};
export const view = async (query: any, ...values: any[]) => {
  try {
    const data:any = await client1.query(query, values);
    return data.rows;
  } catch (error: any) {
    console.log("viewError", error.stack);
    return error.stack;
  }
}; 
export const remove = async (query: any, ...values: any[]) => {
  try {
    await client1.query(query, values);
    return true;
  } catch (error: any) {
    console.log("deleteError", error.stack);
    return error.stack;
  }
};  
