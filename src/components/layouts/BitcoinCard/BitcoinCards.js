import React, { useEffect, useState, useContext, Fragment } from "react";
import BitcoinContext from "../../../context/bitcoin/bitcoinContext";
import BitCoinCard from "./BitcoinCard";
import BitcoinCard from "./BitcoinCard";
const BitcoinCards = () => {
  const [bitcoinInfoLocal, setBitcoinInfoLocal] = useState([]);
  const [discalimerLocal, setDiscalimerLocal] = useState("");

  const bitcoinContext = useContext(BitcoinContext);
  const {
    loading,
    bitcoinInfo,
    bitcoinErrors,
    getBitcoinPrices
  } = bitcoinContext;

  useEffect(() => {
    if (bitcoinInfo === null) {
      getBitcoinPrices();
    }
  }, []);

  useEffect(() => {
    if (bitcoinInfo !== null) {
      setBitcoinInfoLocal(bitcoinInfo.bpi);
      setDiscalimerLocal(bitcoinInfo.disclaimer);
    }
  }, [bitcoinInfo, bitcoinInfoLocal]);
  return (
    <Fragment>
      {!loading && bitcoinInfoLocal !== null
        ? Object.keys(bitcoinInfoLocal).map((item, index) => (
            <Fragment>
              <BitcoinCard key={index} bitcoinInfo={bitcoinInfoLocal[item]} />
            </Fragment>
          ))
        : null}
      <section className='bitcoin__disclaimer'>
        <p>{discalimerLocal}</p>
      </section>
    </Fragment>
  );
};

export default BitcoinCards;
