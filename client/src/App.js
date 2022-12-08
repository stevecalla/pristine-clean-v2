import React from "react";
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
import Dashboard from "./pages/Dashboard";
import Availability from "./pages/Availability";
import Timeoff from "./pages/Timeoff";
import Incident from "./pages/Incident";
import Location from "./pages/Location";
import WrongPage from "./pages/WrongPage";
import IncidentList from "./pages/IncidentList";
import Auth from "./utils/auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  faTrash,
  faLocation,
  faShareNodes,
  faXmarkCircle,
  faSearch,
  faSpinner,
  faEye,
  faEyeSlash,
  faMap,
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
  faMap
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
  if (!Auth.loggedIn()) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/login"
                element={<Homepage tabDisplay={"login"} />}
              />
              <Route
                exact
                path="/signup"
                element={<Homepage tabDisplay={"signup"} />}
              />
              <Route path="*" element={<Homepage />} />
            </Routes>
          </>
        </Router>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/login"
                element={<Homepage />}
              />
              <Route
                exact
                path="/signup"
                element={<Homepage />}
              />
              {/* <Route 
                exact path="/dashboard" 
                element={
                  <Dashboard 
                    renderPanel={"calendar"}
                  />}
              /> */}
              <Route
                exact
                path="/calendar"
                element={
                  <Dashboard 
                    renderPanel={"calendar"}
                  />}
              />
              <Route
                exact
                path="/employees"
                element={
                  <Dashboard 
                    renderPanel={"employees"} 
                  />}
              />
              <Route
                exact
                path="/locations"
                element={
                  <Dashboard
                    renderPanel={"locations"} 
                  />}
              />
              <Route exact path="/availability" element={<Availability />} />
              <Route exact path="/timeoff" element={<Timeoff />} />
              <Route exact path="/incident" element={<Incident />} />
              <Route exact path="/location" element={<Location />} />
              <Route exact path="/incidentlist" element={<IncidentList />} />
              <Route path="*" element={<WrongPage />} />
            </Routes>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
