import { SiGnuprivacyguard } from "react-icons/si";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useState } from "react";
const Registration = () => {

     const { createUser, updateUserProfile } = useContext(AuthContext);
     const [error, setError] = useState('');

     const handleSubmit = (event) =>{
         event.preventDefault();
         
           const form = event.target;
           const name = form.name.value;
           const email = form.email.value;
           const photoURL = form.photoURL.value;
           const password = form.password.value
           const confirm = form.confirmPassword.value;
           console.log(name, email, photoURL, password, confirm);
         

         createUser(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
         })
         .catch(e=> {
          console.error(e);
          setError(e.message);
         });


     }
     const handleUpdateUserProfile = (name, photoURL) => {
       const profile = {
         displayName: name,
         photoURL: photoURL,
       };
       updateUserProfile(profile)
         .then(() => {})
         .catch((error) => console.error(error));
     };

     return (
       <div className="d-flex flex-row-reverse m-5">
         <>
           <Form className="w-25 m-5" onSubmit={handleSubmit}>
             <h2 className="text-center mb-3 text-primary">
               Sign Up <SiGnuprivacyguard />{" "}
             </h2>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Name</Form.Label>
               <Form.Control
                 name="name"
                 type="text"
                 placeholder="Give you name"
                 required
               />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control
                 name="email"
                 type="email"
                 placeholder="enter your email"
                 required
               />
             </Form.Group>

      
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Photo URL</Form.Label>
               <Form.Control
                 name="photoURL"
                 type="text"
                 placeholder="Photo URL"
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

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Confirm Password</Form.Label>
               <Form.Control
                 name="confirmPassword"
                 type="password"
                 placeholder="Confirm Password"
                 required
               />
             </Form.Group>

             <p>
               Already Have an account <Link to="/login">Login</Link>
             </p>
             <div className="d-flex gap-4 text-center align-items-center fs-3">
               <Button variant="primary" type="submit" className="w-50">
                 Registration
               </Button>
             </div>

             <Form.Text className="text-danger">{error}</Form.Text>
           </Form>
         </>

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

export default Registration;













