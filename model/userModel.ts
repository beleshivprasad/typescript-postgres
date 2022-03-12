const pooll = require('../Database/connectDB');
export const execute = async (query:any) => {
    try {
       
        await pooll.query(query);
    
        return true;
    } catch (error:any) {
        console.error(error.stack);
        return false;
    }
};

export const text = `
CREATE TABLE IF NOT EXISTS public."User"
(
    user_id "char" NOT NULL,
    "User_name" "char" NOT NULL,
    "Role" "char" NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (user_id)
);`;