import React from "react";
import "./loadingcard.css";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonSkeletonText
} from "@ionic/react";
const LoadingCard = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonSkeletonText
            className='loading-card__currency-name'
            animated
          ></IonSkeletonText>
        </IonCardSubtitle>
        <IonCardTitle>
          <IonSkeletonText
            className='loading-card__currency-value'
            animated
          ></IonSkeletonText>
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default LoadingCard;
