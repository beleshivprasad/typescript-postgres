import { client1 } from "./connectDB";
//Application Schema
const ProductsTable = `
CREATE TABLE IF NOT EXISTS public."Products"
(
    product_id "varchar" NOT NULL,
    product_name "varchar" NOT NULL,
    brand_name "varchar" NOT NULL,
    price integer NOT NULL,
    quantity integer NOT NULL,
    catogery "varchar" NOT NULL,
    sub_catogery "varchar" NOT NULL,
    CONSTRAINT "Products_pkey" PRIMARY KEY (product_id)
)`;

const UsersTable = `
CREATE TABLE IF NOT EXISTS public."Users"
(
    user_id "varchar" NOT NULL,
    username "varchar" NOT NULL,
    role "varchar" NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (user_id)
);`;

const OrdersTable = `
CREATE TABLE IF NOT EXISTS public."Orders"
(
    order_id "varchar" NOT NULL,
    user_id "varchar" NOT NULL,
    username "varchar" NOT NULL,
    product_id "varchar" NOT NULL,
    product_name "varchar" NOT NULL,
    price integer NOT NULL,
    CONSTRAINT order_id PRIMARY KEY (order_id)
        INCLUDE(order_id)
);`;

export const createSchema: Function = async () => {
  console.log("Creating Schema.....");
  await client1.query(UsersTable, (err: object, data: object) => {
    if (err) {
      console.log(err);
    }
    console.log("1.Users Table Created.");
  });
  await client1.query(ProductsTable, (err: object, data: object) => {
    if (err) {
      console.log(err);
    }
    console.log("2.Products Table Created.");
  });
  await client1.query(OrdersTable, (err: object, data: object) => {
    if (err) {
      console.log(err);
    }
    console.log("3.Orders Table Created");
    console.log("Done.");
  });
};
