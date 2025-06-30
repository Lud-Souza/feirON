import createContext from './createCartContext';

const initialState = {
  cart: [],
  favorites: [],
  sales: [],
};

const reducer = (stateCart, action) => {
  switch (action.type) {
    case 'cart':
      return { ...stateCart, cart: action.payload };
    case 'favorites':
      return { ...stateCart, favorites: action.payload };
    case 'sales':
      return { ...stateCart, sales: action.payload };
    default:
      return stateCart;
  }
};

const setCart = (dispatch) => {
  return (obj) => {
    dispatch({ type: 'cart', payload: obj });
  };
};

const setFavorites = (dispatch) => {
  return (obj) => {
    dispatch({ type: 'favorites', payload: obj });
  };
};

const setSales = (dispatch) => {
  return (obj) => {
    dispatch({ type: 'sales', payload: obj });
  };
};


export const { Context, Provider } = createContext(
  reducer,
  {
    setCart,
    setFavorites,
    setSales,
  },
  initialState,
);
