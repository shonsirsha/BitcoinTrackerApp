import React, { useEffect, useState, useContext, Fragment } from "react";
import "../layouts/LoadingCard/LoadingCard";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from "@ionic/react";
import BitcoinContext from "../../context/bitcoin/bitcoinContext";
import LoadingCard from "../layouts/LoadingCard/LoadingCard";

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
  const loadingCards = (
    <Fragment>
      <LoadingCard></LoadingCard>
      <LoadingCard></LoadingCard>
      <LoadingCard></LoadingCard>
    </Fragment>
  );
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='primary'>
          <ion-title>Bitcoin Price Tracker</ion-title>
        </IonToolbar>
      </IonHeader>
      <IonContent>{loading ? loadingCards : <h1>BIGMAN</h1>}</IonContent>
    </IonApp>
  );
};

export default Home;
