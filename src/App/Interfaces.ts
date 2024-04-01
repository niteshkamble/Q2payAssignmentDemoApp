export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface productData {
  products:Product[],
  total:number | null,
  skip:number|null,
  limit:number|null
}

export interface State {
  productsList: Product[]|null[];
  productsListLoading: boolean;
  productsListError: null | Error;
  product: Product | null;
  productLoading: boolean;
  productError: null | Error;
}