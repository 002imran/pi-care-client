import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { SiGnuprivacyguard } from "react-icons/si";
import React, { useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { useState } from "react";


const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn =()=>{
      providerLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
       providerLogin(githubProvider)
        .then((result) => {
          const user = result.user;
           console.log(user);
        })
        .catch(error => console.error('error:', error))
    };

    const handleSubmit = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;

      const password = form.password.value;
      signIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace: true})
      })
      .catch(error =>{
       console.error(error)
       setError(error.message);
      })
      
    }


  return (
    // <div className="d-flex flex-row-reverse m-5">
    <div className="d-flex flex-column-reverse flex-md-row-reverse m-5 me-sm-5">
      <>
        <Form className="w-100 me-sm-5" onSubmit={handleSubmit}>
          <h2 className="text-center mb-3 text-primary">
            Log In <SiGnuprivacyguard />
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <p>
            Donn't have an account{" "}
            <Link to="/registration">registration here</Link>
          </p>
          <div className="d-flex gap-4 text-center align-items-center fs-3">
            <Button variant="primary" type="submit" className="w-50">
              Login
            </Button>
            <BsGoogle title="Google" onClick={handleGoogleSignIn} />
            <BsGithub title="Github" onClick={handleGithubSignIn} />
          </div>

          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
      </>

      {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"> */}
      {/* <div className="d-sm-block d-none"> */}
      <div className="">
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