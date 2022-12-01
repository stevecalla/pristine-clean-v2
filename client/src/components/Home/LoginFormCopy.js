import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import decode from "jwt-decode";

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

      isManager
        ? navigate(`/managerdash`, { replace: true })
        : navigate(`/employeedash`, { replace: true });

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
    <div className="d-flex flex-column align-items-center mt-3">
        <div className="d-flex flex-column align-items-center">
          {/* <div className="mx-4" style={{ width: "350px" }}>
            <p className="mt-2 mb-1">Log In</p>
            <hr className="my-0 mb-1"></hr>
            <hr className="my-0"></hr>
          </div> */}

          <Form
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
            className="mx-2 mt-2 mb-1"
            style={{ width: "350px"}}
          >
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
              className="mb-3"
              type="submit"
              variant="success"
            >
              Submit
            </Button>
          </Form>
        </div>

        {/* show alert if server response is bad */}
        {error && (
          <div className="d-flex justify-content-center">
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
            className="mb-4 py-1 pl-1 bg-danger text-white"
            style={{ width: "300px" }}
          >
            <p className="" style={{ width: "200px" }}>Something went wrong with your login credentials!</p>
          </Alert>
          </div>
        )}
      </div>
  );
};

export default LoginForm;
