// import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from "react-bootstrap/Button";


// const Login = () => {

//   const handleSubmit =(e) =>{
//     e.preventDefault();
//     console.log(e.target.email.value);
//   }
//    return (
//      <div className="mt-5 me-5">
//        <section className="vh-100" style={{ "background-color": "#eee" }}>
//          <div className="container h-100">
//            <div className="row d-flex justify-content-center align-items-center h-100">
//              <div className="col-lg-12 col-xl-11">
//                <div
//                  className="card text-black"
//                  style={{ "border-radius": "25px" }}
//                >
//                  <div className="card-body p-md-5">
//                    <div className="row justify-content-center">
//                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                          Log In
//                        </p>

//                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
//                          <div className="d-flex flex-row align-items-center mb-4">
//                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                          </div>

//                          <div className="d-flex flex-row align-items-center mb-4">
//                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                            <div className="form-outline flex-fill mb-0">
//                              <input
//                                type="email"
//                                id="form3Example3c"
//                                className="form-control"
//                                name='email'
//                              />
//                              <label className="form-label" for="form3Example3c">
//                                Your Email
//                              </label>
//                            </div>
//                          </div>

//                          <div className="d-flex flex-row align-items-center mb-4">
//                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                            <div className="form-outline flex-fill mb-0">
//                              <input
//                                type="password"
//                                id="form3Example4c"
//                                className="form-control"
//                              />
//                              <label className="form-label" for="form3Example4c">
//                                Password
//                              </label>
//                            </div>
//                          </div>

//                          <div className="d-flex justify-content-center ms-3 mb-3 mb-lg-4">
//                            <Button
//                              type="button"
//                              className="btn btn-primary btn-lg w-100"
//                            >
//                              LogIn
//                            </Button>
//                          </div>
//                          <div className="form-check d-flex justify-content-center mb-5">
//                            <label
//                              className="form-check-label"
//                              for="form2Example3"
//                            >
//                              Don't have an Account{" "}
//                              <Link to="/registration">
//                                Please Registration Here
//                              </Link>
//                            </label>
//                          </div>
//                        </form>
//                      </div>
//                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                        <img
//                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                          className="img-fluid"
//                          alt="Sample image"
//                        />
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </section>
//      </div>
//    );
// };

// export default Login;











import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
// import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "../Registration/Registration.css";

const Login = () => {

  const { user, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn =()=>{
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }


  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   password: ""
  // });

  // const [errors, setErrors] = useState('')


  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  // }

  // const handleEmailChange = (e) =>{
  //   setUserInfo({...userInfo, email: e.target.value});
  // }

  // const handlePasswordChange = (e) =>{
  //   const password = e.target.value;
  //   if(password.length < 6){
  //     setErrors("Must be 6 characters")
  //   }
  //   setUserInfo({...userInfo, password: e.target.value});
  // }
  return (
    <div className="d-flex w-75 ms-5">
      <div className="login-container">
        <div className="login-title">
          Login
          <BiLogInCircle />
        </div>
        <form className="login-form">
          <input type="text" placeholder="Your Email" name="email" />
          <input type="password" placeholder="password" name="password" />

          <button>Login</button>
          

          <p>
            Don't have an account? <Link to="/registration">Sign up first</Link>
          </p>
        </form>

        <Button onClick={handleGoogleSignIn}>Google</Button>
      </div>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
    </div>
  );
};

export default Login;