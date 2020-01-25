import React, { Fragment, useContext } from "react";
import "../layouts/LoadingCard/LoadingCard";
import BitcoinContext from "../../context/bitcoin/bitcoinContext";

import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from "@ionic/react";

import { logoBitcoin } from "ionicons/icons";
import LoadingCard from "../layouts/LoadingCard/LoadingCard";
import BitcoinCard from "../layouts/BitcoinCard/BitcoinCards";
import "../../App.css";
const Home = () => {
  const bitcoinContext = useContext(BitcoinContext);
  const { loading } = bitcoinContext;
  const loadingCards = (
    <Fragment>
      <LoadingCard></LoadingCard>
      <LoadingCard></LoadingCard>
      <LoadingCard></LoadingCard>
    </Fragment>
  );
  return (
    <IonApp>
      {/* <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Bitcoin Price Tracker</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <section className='bitcoin__header'>
          <IonIcon icon={logoBitcoin} className='bitcoin__logo' />
        </section>
        {loading ? loadingCards : <BitcoinCard />}
      </IonContent>
    </IonApp>
  );
};

export default Home;
