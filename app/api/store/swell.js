import * as swell from "swell-node";

swell.init(process.env.SWELL_STORE_ID, process.env.STORE_SECRET_KEY);

export const getAllProducts = async () => {
  const products = await swell.get("/products", {
    active: true
  });
  
  return products;
};
