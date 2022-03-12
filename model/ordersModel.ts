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
CREATE TABLE IF NOT EXISTS public.orders
(
    order_id "char NOT NULL,
    user_id "char NOT NULL,
    product_id "char" NOT NULL,
    CONSTRAINT order_id PRIMARY KEY (order_id)
        INCLUDE(order_id),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public."Products" (product_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public."User" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);`
