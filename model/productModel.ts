const Client = require('../Database/connectDB');
export const execute = async (query:any) => {
    try {
       
        await Client.query(query);
    
        return true;
    } catch (error:any) {
        console.error(error.stack);
        return false;
    }
};

export const text = `
CREATE TABLE IF NOT EXISTS public."Products"
(
    product_id "char" NOT NULL,
    product_name "char" NOT NULL,
    brand_name "char" NOT NULL,
    price integer NOT NULL,
    catogery "char" NOT NULL,
    sub_catogery "char" NOT NULL,
    CONSTRAINT "Products_pkey" PRIMARY KEY (product_id)
)`;