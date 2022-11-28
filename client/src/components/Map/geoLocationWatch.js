let id;
let target;
let options;

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

export function geoLocationWatch(pos) {
  try {
    const crd = pos.coords;

    if (
      target.latitude === crd.latitude &&
      target.longitude === crd.longitude
    ) {
      console.log("Congratulations, you reached the target");
      navigator.geolocation.clearWatch(id);
    }
    return crd;
  } catch (error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
    return error;
  }
}

export function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.watchPosition(geoLocationWatch, error, options);

// source:
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition

// const watchID = navigator.geolocation.watchPosition((position) => {
//   console.log(position.coords.latitude, position.coords.longitude);
// });
