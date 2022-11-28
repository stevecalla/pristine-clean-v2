import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CenterIcon = ({ center, map }) => {
  return (
    <>
      <FontAwesomeIcon
        icon="fa-location"
        className="pt-2 px-2 pb-1 fa-lg"
        title="Center"
        alt="Center Map"
        style={centerStyle}
        onClick={() => {
          map.panTo(center);
          map.setZoom(15);
        }}
      />
    </>
  );
};

const centerStyle = {
  bottom: "62px",
  left: "12px",
  height: "28px",
  width: "28px",
  padding: "12px",
  color: "#666666",
  backgroundColor: "white",
  cursor: "grab",
  position: "absolute",
  zIndex: "2",
  borderRadius: "2px",
  boxShadow: "rgb(0 0 0 / 30%) 0px 1px 0px -1px",
};
