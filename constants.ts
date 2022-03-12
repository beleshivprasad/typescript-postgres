// export const ROLE:any={
//     ADMIN:"admin",
//     USER:"user"
//   }
//   export const TICKET_STATUS={
//     APPROVE:"approve",
//     REJECT:"reject"
//   }
  export const RESPONSE_STATUS={
  UNAUTHORIZED:401,
  FORBIDDEN:403,
  INTERNAL_SERVER_ERROR:500,
  CONFLICT:409,
  BAD_REQUEST:400,
  SUCCESS:200,
  NOT_FOUND:404
  }
  export const  INSERT_PRODUCT:string= `INSERT INTO "Products" (products_id,product_name,brand_name,price,catogery,sub_catogery) VALUES($)1,$2,$3,$4,$5,$6})`
