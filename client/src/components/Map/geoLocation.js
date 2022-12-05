// export const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// // if ('geolocation' in navigator) {
// //   /* geolocation is available */
// // } else {
// //   /* geolocation IS NOT available */
// // }

// export function geoLocation(pos) {
//   try {
//     const crd = pos.coords;

//     console.log(pos.coords);

//     console.log("Your current position is:");
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);

//     console.log(`Altitude: ${crd.altitude}`);
//     console.log(`More or less ${crd.altitudeAccuracy} meters.`);
//     console.log(`Speed: ${crd.speed}`);
//     console.log(`Heading: ${crd.heading}`);
//     console.log({ crd });
//     return crd;
//   } catch (error) {
//     console.warn(`ERROR(${error.code}): ${error.message}`);
//     return error;
//   }
// }

// export function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// // navigator.geolocation.getCurrentPosition(geoLocation, error, options);

// // source:
// // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// // https://www.w3.org/TR/geolocation/

// export function getCoords() {
//   try {
//     navigator.geolocation.getCurrentPosition((position) => {
//       let crds = position.coords;
//       console.log(
//         position.coords.latitude,
//         position.coords.longitude,
//         position.coords.accuracy,
//         position.coords.altitude,
//         position.coords.altitudeAccuracy,
//         position.coords.speed
//       );
//       return `${crds.latitude},${crds.longitude}`;
//     });
//   } catch (error) {
//     console.warn(`ERROR(${error.code}): ${error.message}`);
//   }
// }

// // navigator.geolocation.getCurrentPosition((position) => {
// //   console.log(
// //       position.coords.latitude,
// //       position.coords.longitude,
// //       position.coords.accuracy,
// //       position.coords.altitude,
// //       position.coords.altitudeAccuracy,
// //       position.coords.speed
// //   );
// // });
