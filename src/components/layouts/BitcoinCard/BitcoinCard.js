import React from "react";
import BitcoinContext from "../../../context/bitcoin/bitcoinContext";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonSkeletonText
} from "@ionic/react";
const BitcoinCard = ({ bitcoinInfo }) => {
  const { code, rate_float } = bitcoinInfo;
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{code}</IonCardSubtitle>
        <IonCardTitle>{rate_float}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default BitcoinCard;
