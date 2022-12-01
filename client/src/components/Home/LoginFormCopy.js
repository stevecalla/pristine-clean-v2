// see SignupForm.js for comments
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import decode from "jwt-decode";
import { CleanMop } from "./CleanAsset";
// import { CleanCouple } from "./CleanCouple";

const LoginForm = ({ setShowModal }) => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  let navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      // Auth.login(data.login.token);
      Auth.login(data.login);
      
      let decodedToken = decode(data.login.token);
      let isManager = decodedToken.data.isManager;
      // let userId = decodedToken.data._id;

      // navigate('/location', {replace: true});
      // console.log(decode(data.login.token), data.login.user, {decodedToken}, {isManager}, {userId})
      
      // isManager ? window.location.assign("/managerdash") : window.location.assign(`/employeedash/`)

      isManager ? navigate(`/managerdash`, {replace: true}) : navigate(`/employeedash`, {replace: true});

      setShowModal(false);

    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="mx-4 mt-4 mb-4" style={{ height: "150px" }}>
        <div className="d-flex justify-content-center align-content-center align-item-center">
          {/* <p className="mb-0" >{<CleanMop />}</p> */}
          {/* <p className="mb-0" >{<CleanCouple />}</p> */}
          <CleanMop />
        </div>
      </div>
      <div className="mx-4">
        <p className="mb-1">Sign In</p>
        <hr className="my-0 mb-1"></hr>
        <hr className="my-0"></hr>
      </div>

      <Form noValidate validated={validated} className="m-4" onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>

      {/* show alert if server response is bad */}
      {error && (
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
          className="my-3 p-3 bg-danger text-white"
        >
          Something went wrong with your login credentials!
        </Alert>
      )}
    </>
  );
};

export default LoginForm;
