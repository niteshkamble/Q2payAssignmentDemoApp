import {Product, productData} from '../App/Interfaces';

const BASE_URL = 'https://dummyjson.com';

const getProductList = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const productData = (await response.json()) as productData;
  //delaying to show skeleton loader smoothly.
  await new Promise(resolve => setTimeout(resolve, 1500));
  return productData;
};

const getProduct = async (id: number) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const productData = (await response.json()) as Product;
  //delaying to show skeleton loader smoothly.
  await new Promise(resolve => setTimeout(resolve, 500));
  return productData;
};

export {getProductList, getProduct};
