import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";
import MapPage from "./pages/MapPage";
import EmployeeDash from "./pages/EmployeeDash";
import ManagerDash from "./pages/ManagerDash";
import Availability from "./pages/Availability";
import Timeoff from "./pages/Timeoff";
import Incident from "./pages/Incident";
import Location from "./pages/Location";

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === 'development' ? "http://localhost:3001/graphql" : "/graphql"
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<SearchBooks />} />
            <Route exact path="/saved" element={<SavedBooks />} />
            <Route exact path="/map" element={<MapPage />} />
            <Route exact path="/employeedash" element={<EmployeeDash />} />
            <Route exact path="/managerdash" element={<ManagerDash />} />
            <Route exact path="/availability" element={<Availability />} />
            <Route exact path="/timeoff" element={<Timeoff />} />
            <Route exact path="/incident" element={<Incident />} />
            <Route exact path="/location" element={<Location />} />

            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;

