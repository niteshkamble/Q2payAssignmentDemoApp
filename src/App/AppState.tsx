import React, {createContext, useContext, useReducer} from 'react';
import {Product, productData} from './Interfaces';
import {getProduct, getProductList} from '../services/product.service';

// Define the action types for state updates
enum ActionType {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,

  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  PRODUCT_VIEWED,
  FETCH_PRODUCT_ERROR,
}

// Define the action type for state updates
type Action =
  | {type: ActionType.FETCH_PRODUCTS_START}
  | {type: ActionType.FETCH_PRODUCTS_SUCCESS; payload: Product[]}
  | {type: ActionType.FETCH_PRODUCTS_ERROR; payload: string}
  | {type: ActionType.FETCH_PRODUCT_START}
  | {type: ActionType.FETCH_PRODUCT_SUCCESS; payload: Product}
  | {type: ActionType.PRODUCT_VIEWED}
  | {type: ActionType.FETCH_PRODUCT_ERROR; payload: string};

// Define the state type for the context
interface State {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
  // listSize:number,
  // listLimit:number
}

// Define reducer function to handle state updates
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCTS_START:
      return {...state, loading: true, error: null};
    case ActionType.FETCH_PRODUCTS_SUCCESS:
      return {...state, loading: false, products: action.payload, error: null};
    case ActionType.FETCH_PRODUCTS_ERROR:
      return {...state, loading: false, error: action.payload};

    case ActionType.FETCH_PRODUCT_START:
      return {...state, loading: true, error: null};
    case ActionType.FETCH_PRODUCT_SUCCESS:
      return {...state, loading: false, product: action.payload, error: null};
    case ActionType.PRODUCT_VIEWED:
      return {...state, loading: false, product: null, error: null};
    case ActionType.FETCH_PRODUCT_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

// Create the context
const ProductsContext = createContext<
  State & {
    fetchProducts: () => Promise<void>;
    fetchProduct: (id: number) => Promise<void>;
    resetProduct: () => void;
  }
>(
  {} as State & {
    fetchProducts: () => Promise<void>;
    fetchProduct: (id: number) => Promise<void>;
    resetProduct: () => void;
  },
);

// Create the custom hook for consuming the context
const useProducts = () => {
  const {
    products,
    product,
    loading,
    error,
    fetchProducts,
    fetchProduct,
    resetProduct,
  } = useContext(ProductsContext);
  if (!fetchProducts || !fetchProduct || !resetProduct) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return {
    products,
    product,
    loading,
    error,
    fetchProducts,
    fetchProduct,
    resetProduct,
  };
};

// Create the provider component for the context
const ProductsProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const initialState: State = {
    products: null as unknown as Product[],
    product: null,
    loading: false,
    error: null,
    // listSize:0,
    // listLimit:20
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Define fetchProducts function
  const fetchProducts = async () => {
    dispatch({type: ActionType.FETCH_PRODUCTS_START});
    try {
      const productData: productData = await getProductList();
      dispatch({
        type: ActionType.FETCH_PRODUCTS_SUCCESS,
        payload: productData.products,
      });
    } catch (error: any) {
      dispatch({type: ActionType.FETCH_PRODUCTS_ERROR, payload: error.message});
    }
  };

  // Define fetchProduct function
  const fetchProduct = async (id: number) => {
    dispatch({type: ActionType.FETCH_PRODUCT_START});
    try {
      const product: Product = await getProduct(id);
      dispatch({type: ActionType.FETCH_PRODUCT_SUCCESS, payload: product});
    } catch (error: any) {
      dispatch({type: ActionType.FETCH_PRODUCT_ERROR, payload: error.message});
    }
  };

  const resetProduct = () => {
    dispatch({type: ActionType.PRODUCT_VIEWED});
  };

  return (
    <ProductsContext.Provider
      value={{...state, fetchProducts, fetchProduct, resetProduct}}>
      {children}
    </ProductsContext.Provider>
  );
};

export {ProductsContext, useProducts, ProductsProvider};
