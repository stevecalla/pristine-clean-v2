import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
// import MapPage from "./pages/MapPage";
import ManagerDash from "./pages/Dashboard";
import Availability from "./pages/Availability";
import Timeoff from "./pages/Timeoff";
import Incident from "./pages/Incident";
import Location from "./pages/Location";
import WrongPage from './pages/WrongPage'
import Auth from "./utils/auth";

import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faLocation,
  faShareNodes,
  faXmarkCircle,
  faSearch,
  faSpinner,
  faEye,
  faEyeSlash,
  faInfo,
  faCircleInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrash,
  faLocation,
  faShareNodes,
  faXmarkCircle,
  faSearch,
  faSpinner,
  faEye,
  faEyeSlash,
  faInfo,
  faCircleInfo,
  faInfoCircle
);

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/graphql"
      : "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [tabDisplay, setTabDisplay] = useState("login");
  // console.log(tabDisplay)

  if (!Auth.loggedIn()) {
    return (
      // console.log("not logged in"),

      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            {Auth.loggedIn() ? console.log(true) : console.log(false)}
            <Routes>
              {/* <Route exact path="/" element={<Homepage />} /> */}
              <Route
                exact
                path="/login"
                element={
                  Auth.loggedIn() ? (
                    <Homepage />
                  ) : (
                    <Homepage tabDisplay={"login"} />
                  )
                }
              />
              <Route
                exact
                path="/signup"
                element={
                  Auth.loggedIn() ? (
                    <Homepage />
                  ) : (
                    <Homepage tabDisplay={"signup"} />
                  )
                }
              />
              <Route
                path="*"
                element={<Homepage />}
                // element={<h1 className="display-2">Wrong page!</h1>}
              />
            </Routes>
          </>
        </Router>
      </ApolloProvider>
    )
  } else {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            {Auth.loggedIn() ? console.log(true) : console.log(false)}
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/login"
                element={
                  Auth.loggedIn() ? (
                    <Homepage />
                  ) : (
                    <Homepage tabDisplay={"login"} />
                  )
                }
              />
              <Route
                exact
                path="/signup"
                element={
                  Auth.loggedIn() ? (
                    <Homepage />
                  ) : (
                    <Homepage tabDisplay={"signup"} />
                  )
                }
              />
              <Route exact path="/dashboard" element={<ManagerDash />} />
              <Route exact path="/availability" element={<Availability />} />
              <Route exact path="/timeoff" element={<Timeoff />} />
              <Route exact path="/incident" element={<Incident />} />
              <Route exact path="/location" element={<Location />} />
              <Route
                path="*"
                element={<WrongPage />}
              />
            </Routes>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
