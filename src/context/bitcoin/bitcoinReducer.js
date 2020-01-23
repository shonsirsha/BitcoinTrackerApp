import { GET_BITCOIN_PRICES, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BITCOIN_PRICES:
      return {
        ...state,
        bitcoinInfo: action.payload,
        bitcoinErrors: null,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
