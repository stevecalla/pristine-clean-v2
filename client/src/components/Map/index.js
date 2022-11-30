import React, { useRef, useState, memo } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

import Spinner from "react-bootstrap/Spinner";

import SearchIcon from "./SearchIcon";
import { LoadMap } from "./LoadMap";

import seed from "./responseSeed";
import { DirectionsPanel } from "./DirectionsPanel";
import { Share } from "./Share";
import { CenterIcon } from "./CenterIcon";

const center = { lat: 40.1672, lng: -105.1019 };
const libraries = ["places"];

function Map({ originDb, destinationDb }) {
  // console.log({ originDb }, { destinationDb })
  // const [originTest, setOriginTest] = useState();
  // const [destinationTest, setDestinationTest] = useState();
  console.log({ seed });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  let origin = useRef();
  let destination = useRef();

  if (!isLoaded) {
    return <Spinner animation="border" />;
  }

  // if ( originDb && destinationDb ) {
  //   calculateRoute();
  // }

  async function calculateRoute(event) {
    event.preventDefault();
    setDirectionsResponse(seed);
    setDistance(seed.routes[0].legs[0].distance.text);
    setDuration(seed.routes[0].legs[0].duration.text);
  }

  // async function calculateRoute(event) {
  //   event && event.preventDefault();
  //   if (origin.current?.value === "" || destination.current?.value === "") {
  //     return;
  //   }

  //   let originSubmitted = "";
  //   let destinationSubmitted = "";

  //   console.log( origin.current?.value );
  //   console.log( destination.current?.value );
  //   console.log({ originDb });
  //   console.log({ destinationDb })

  //   if (origin.current?.value && destination.current?.value) {
  //     originSubmitted = origin.current?.value;
  //     destinationSubmitted = destination.current?.value;
  //   } else {
  //     originSubmitted = originDb;
  //     destinationSubmitted = destinationDb;
  //   }

  //   // eslint-disable-next-line no-undef
  //   const directionsService = new google.maps.DirectionsService();

  //   const results = await directionsService.route({
  //     // origin: originDb || origin.current.value,
  //     // destination: destinationDb || destination.current.value,
  //     origin: originSubmitted,
  //     destination: destinationSubmitted,
  //     // eslint-disable-next-line no-undef
  //     travelMode: google.maps.TravelMode.DRIVING,
  //     // optimizeWaypoints: true,
  //     // provideRouteAlternatives: true,
  //   });

  //   setDirectionsResponse(results);
  //   setDistance(results.routes[0].legs[0].distance.text);
  //   setDuration(results.routes[0].legs[0].duration.text);
  // }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    origin.current.value = "";
    destination.current.value = "";
  }

  return (
    <div>
      <DirectionsPanel />
      
      <div style={containerStyle} className="d-flex align-items-center">
        <LoadMap
          center={center}
          directionsResponse={directionsResponse}
          setMap={setMap}
        />

        <Share />

        <CenterIcon center={center} map={map} />

        <div style={lineBreakStyle}></div>

        <SearchIcon
          calculateRoute={calculateRoute}
          center={center}
          clearRoute={clearRoute}
          destination={destination}
          distance={distance}
          duration={duration}
          map={map}
          origin={origin}
        />
      </div>

    </div>
  );
}

export default memo(Map);

const containerStyle = {
  flexDirection: "column",
  width: "100vw",
  height: "93vh",
  position: "relative",
};

const lineBreakStyle = {
  // heigth: "1px",
  heigth: ".25px",
  width: "33px",
  // bottom: "135px",
  bottom: "28px",
  left: "64px",
  padding: "1px",
  color: "#E6E6E6",
  backgroundColor: "#E6E6E6",
  position: "absolute",
  zIndex: "2",
  borderRadius: "3px",
};
