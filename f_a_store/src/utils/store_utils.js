const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async (

) => {
  
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json);
  return json;
};