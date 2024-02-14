import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    // console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    // if (inputUsername !== "admin@gmail.com" || inputPassword !== "admin") {
    //   setShow(true);
    //   toast.error("incorrect email or password", {
    //     position: "top-center",
    //     autoClose: 1200,
    //   });
    // }
    // else {
    //   toast.success("Login Successfully", {
    //     autoClose: 1200,
    //   });
    // }

    const userData = {
      email: inputUsername,
      password: inputPassword
    };

    try {
      const response = await fetch("http://localhost:21384/api/Login/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const decodedToken = jwtDecode(data.token);
        const userRole = decodedToken.role;

        console.log("Login successful");
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 1200,
        });

        switch (userRole) {
          case "Admin":

            navigate("/user/appnavbar");
            break;
          case "Employee":
            navigate("/user/appnavbar");
            //   history.push("/user/dashboard");
            break;
          default:

            //   history.push("/default/dashboard");
            break;
        }
      } else {
        setShow(true);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("incorrect email or password", {
        position: "top-center",
        autoClose: 1200,
      });
    }

    setLoading(false);
  }

    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

  return (
    <div >
      <div className="sign-in__wrapper ">
        <div className="sign-in__backdrop sign-in-bg-img"></div>
        <ToastContainer />
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          {/* <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        /> */}
          <div className="h4 mb-2 text-center">Sign In</div>
          {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect email or password.
          </Alert>
        ) : (
          <div />
        )}
          <Form.Group className="mb-2" controlId="username">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={inputUsername}
              placeholder="Email"
              onChange={(e) => setInputUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={inputPassword}
              placeholder="Password"
              onChange={(e) => setInputPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="checkbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
           ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )} 
        </Form>
      </div>
    </div>
  );
};

export default Login;
