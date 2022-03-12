import { client1 } from "../database/connectDB";
export const execute = async (query: any) => {
    try {
       
        await client1.query(query);
    
        return true;
    } catch (error:any) {
        console.error(error.stack);
        return false;
    }
};
