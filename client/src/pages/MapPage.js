import React, { useState, useEffect } from "react";
// import "./App.css";

import Map from "../components/Map";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faLocation,
  faShareNodes,
  faXmarkCircle,
  faSearchLocation,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrash,
  faLocation,
  faShareNodes,
  faXmarkCircle,
  faSearchLocation,
  faSearch
);

function MapPage() {
  const [originDb, setOriginDb] = useState("");
  // const [originDb, setOriginDb] = useState('40.0945509, -105.178197'); //Boulder, CO
  const [destinationDb, setDestinationDb] = useState("Longmont, CO, USA");
  const [coords, setCoords] = useState("");

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
              console.log({originDb})
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

  //get destinationDB from database
  // setDestinationDb('Longmont, CO, USA');

  return (
    <div className="App">
      <Map originDb={originDb} destinationDb={destinationDb} />
    </div>
  );
}

export default MapPage;

