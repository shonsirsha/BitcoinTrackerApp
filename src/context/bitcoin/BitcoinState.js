import React, { useReducer } from "react";
import BitcoinReducer from "./bitcoinReducer";
import BitcoinContext from "./bitcoinContext";
import axios from "axios";

import { GET_BITCOIN_PRICES, SET_LOADING } from "../types";

const BitcoinState = props => {
  const initialState = {
    loading: false,
    bitcoinInfo: null,
    bitcoinErrors: null
  };

  const [state, dispatch] = useReducer(BitcoinReducer, initialState);
  const getBitcoinPrices = async () => {
    setLoading();
    try {
      const res = await axios.get(
        "http://api.coindesk.com/v1/bpi/currentprice.json"
      );

      dispatch({ type: GET_BITCOIN_PRICES, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  return (
    <BitcoinContext.Provider
      value={{
        loading: state.loading,
        bitcoinInfo: state.bitcoinInfo,
        bitcoinErrors: state.bitcoinErrors,
        setLoading,
        getBitcoinPrices
      }}
    >
      {props.children}
    </BitcoinContext.Provider>
  );
};

export default BitcoinState;
