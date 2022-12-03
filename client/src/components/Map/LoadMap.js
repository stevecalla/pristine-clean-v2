import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

export const LoadMap = ({ center, directionsResponse, setMap }) => {
  
  // console.log({ center }, { directionsResponse }, { setMap });

  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={mapStyle}
      options={{
        zoomControl: true,
        zoomControlOptions: {
          // eslint-disable-next-line no-undef
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        streetViewControl: true,
        streetViewControlOptions: {
          // eslint-disable-next-line no-undef
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        mapTypeControl: true,
        fullscreenControl: true,
        fullscreenControlOptions: {
          // eslint-disable-next-line no-undef
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
      }}
      onLoad={(map) => {
        setMap(map);
        map.setZoom(15);
        // eslint-disable-next-line no-undef
        new google.maps.Marker({
          // eslint-disable-next-line no-undef
          position: new google.maps.LatLng(center.lat, center.lng),
          // position: {center},
          map: map,
        });
        // eslint-disable-next-line no-undef
        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }}
    >
      {/* {directionsResponse?.routes[2] && (
        <DirectionsRenderer
          directions={directionsResponse}
          routeIndex={2}
          options={{
            draggable: true,
            clickable: false,
            polylineOptions: { strokeColor: "yellow" },
            markers: false,
          }}
        />
      )} */}
      {/* {directionsResponse?.routes[1] && (
        <DirectionsRenderer
          directions={directionsResponse}
          routeIndex={1}
          options={{
            draggable: true,
            clickable: true,
            polylineOptions: { strokeColor: "gray" },
          }}
        />
      )} */}
      {directionsResponse && (
        <DirectionsRenderer
          directions={directionsResponse}
          routeIndex={0}
          // onDirectionsChanged={console.log("changed")}
          options={{ draggable: true }}
          panel={document.getElementById("panel")}
        />
      )}
    </GoogleMap>
  );
};

const mapStyle = {
  height: "950px",
  width: "100%",
  // width: "85%",
  // width: "50%",
  position: "absolute",

  left: "0",
  top: "0",
  // marginRight: "50px"
  // bottom: "0",
  // right: "0",
  // border: "1px solid black",
};
