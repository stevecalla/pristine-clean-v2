import React from "react";
import Lottie from "react-lottie-player";
import cleanMop from "../../assets/lf30_editor_bdlq4qxu.json";

export const CleanMop = () => {
  return (
    <>
      <Lottie
        loop
        animationData={cleanMop}
        play
        style={{ width: 150, height: 150 }}
      />
    </>
  );
};
