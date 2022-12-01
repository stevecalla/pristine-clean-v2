import React from "react";
import Lottie from "react-lottie-player";
import cleanCouple from "../../assets/dlf10_EKUtIRMvz5.json";

export const CleanCouple = () => {
  return (
    <>
      <Lottie
        loop
        animationData={cleanCouple}
        play
        style={{ width: 150, height: 150 }}
      />
    </>
  );
};
