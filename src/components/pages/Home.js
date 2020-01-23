import React, { useEffect, useState, useContext } from "react";
import BitcoinContext from "../../context/bitcoin/bitcoinContext";

const Home = () => {
  const bitcoinContext = useContext(BitcoinContext);
  const {
    bitcoinInfo,
    loading,
    bitcoinErrors,
    getBitcoinPrices
  } = bitcoinContext;

  useEffect(() => {
    if (bitcoinInfo === null) {
      getBitcoinPrices();
    }
  }, []);

  useEffect(() => {
    console.log(bitcoinInfo);
  }, [bitcoinInfo]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Home;
