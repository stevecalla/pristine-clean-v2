import React, { useRef, useState, memo, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

import Spinner from "react-bootstrap/Spinner";

import "../../styles/spinner.css";

import SearchIcon from "./SearchIcon";
import { LoadMap } from "./LoadMap";

import seed from "./responseSeed";
import { DirectionsPanel } from "./DirectionsPanel";
import { Share } from "./Share";
import { CenterIcon } from "./CenterIcon";

const center = { lat: 40.1672, lng: -105.1019 };
const libraries = ["places"];

function Map({ destinationDb }) {

  //section
  const [coords, setCoords] = useState("");
  const [originDb, setOriginDb] = useState("");

  // get user location from navigator api
  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        let crds = position.coords;
        return setCoords(`${crds.latitude},${crds.longitude}`);
      });
    } catch (error) {
      console.warn(`ERROR(${error.code}): ${error.message}`);
    }
  }, []);

  useEffect(() => {
    // coords && console.log(coords);

    async function postData(url = "", data = {}) {
      let reverseGeoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords}&result_type=street_address&key=AIzaSyBGXIaFo3Dhmjo6RcGyEKYi3KqXN0sYt2I`;

      fetch(reverseGeoCodeURL)
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              // console.log(data.results[0].formatted_address);
              setOriginDb(data.results[0].formatted_address);
              console.log({ originDb });
            });
          } else {
            // launchValidationModal(
            //   "Error: Weather Not found",
            //   // `Try Again at a Later Date: ${response.statusText}`
            //   "weather"
            // );
          }
        })
        .catch((error) => {
          // launchValidationModal(
          //   "Error: Weather Not found",
          //   // `Try again later, please`,: ${response.statusText}`
          //   "weather"
          // );
        });
    }

    coords && postData();
  }, [coords, originDb]);

  //section end

  console.log({originDb}, destinationDb.address)

  // const [originTest, setOriginTest] = useState();
  // const [destinationTest, setDestinationTest] = useState();
  console.log({ seed });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState((null)); /** @type google.maps.Map */ 
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  let origin = useRef();
  let destination = useRef();

  if (!isLoaded) {
    return (
      <div 
        className="d-flex justify-content-center" 
        style={{ "height": "200px", "color": "red"}}
        transform="grow-7"
      >
        <Spinner animation="border" />;  
      </div>
    )  
  }

  if ( originDb && destinationDb ) {
    console.log(originDb, destinationDb)
    calculateRoute();
  }

  // section (a) use seed data
  // async function calculateRoute(event) {
  //   event.preventDefault();
  //   setDirectionsResponse(seed);
  //   setDistance(seed.routes[0].legs[0].distance.text);
  //   setDuration(seed.routes[0].legs[0].duration.text);
  // }
  // section seed data end

  // section (#2) to stop the db query comment out this function
  async function calculateRoute(event) {
    console.log('cal route 1')
    event && event.preventDefault();

    // console.log(origin.current.value === "", destination.current.value === "")

    // if (origin.current.value === "" || destination.current.value === "") {
    //   return;
    // }
    
    console.log('cal route 2')

    let originSubmitted = "";
    let destinationSubmitted = "";

    console.log( origin.current?.value );
    console.log( destination.current?.value );
    console.log({ originDb });
    console.log({ destinationDb })

    if (origin.current?.value && destination.current?.value) {
      originSubmitted = origin.current?.value;
      destinationSubmitted = destination.current?.value;
    } else {
      originSubmitted = originDb;
      destinationSubmitted = destinationDb;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      // origin: originDb || origin.current.value,
      // destination: destinationDb || destination.current.value,
      origin: originSubmitted,
      destination: destinationSubmitted,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
      // optimizeWaypoints: true,
      // provideRouteAlternatives: true,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    origin.current.value = "";
    destination.current.value = "";
  }

  if (!isLoaded) {
    return <Spinner animation="border" />;
  } else {

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
