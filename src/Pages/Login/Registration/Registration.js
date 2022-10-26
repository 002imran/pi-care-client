// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";



// const Registration = () => {

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(e.target.email.value);
//   }
//   return (
//     <div className="mt-5 me-5">
//       <section className="vh-100" >
//         <div className="container h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-12 col-xl-11">
//               <div
//                 className="card text-black"
//                 style={{ "border-radius": "25px" }}
//               >
//                 <div className="card-body p-md-5">
//                   <div className="row justify-content-center">
//                     <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                       <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                         Sign up
//                       </p>

//                       <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="form3Example1c"
//                               className="form-control"
//                             />
//                             <label className="form-label" for="form3Example1c">
//                               Your Name
//                             </label>
//                           </div>
//                         </div>

//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="email"
//                               id="form3Example3c"
//                               className="form-control"
//                               name="email"
//                             />
//                             <label className="form-label" for="form3Example3c">
//                               Your Email
//                             </label>
//                           </div>
//                         </div>

//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="password"
//                               id="form3Example4c"
//                               className="form-control"
//                             />
//                             <label className="form-label" for="form3Example4c">
//                               Password
//                             </label>
//                           </div>
//                         </div>

//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="password"
//                               id="form3Example4cd"
//                               className="form-control"
//                             />
//                             <label className="form-label" for="form3Example4cd">
//                               Repeat your password
//                             </label>
//                           </div>
//                         </div>

//                         <div className="form-check d-flex justify-content-center mb-5">
//                           <input
//                             className="form-check-input me-2"
//                             type="checkbox"
//                             value=""
//                             id="form2Example3c"
//                           />
//                           <label
//                             className="form-check-label"
//                             for="form2Example3"
//                           >
//                             I agree all statements in{" "}
//                             <a href="#!">Terms of service</a>
//                           </label>
//                         </div>

//                         <div className="d-flex justify-content-center ms-3 mb-3 mb-lg-4">
//                           <Button
//                             type="button"
//                             className="btn btn-primary btn-lg w-100"
//                           >
//                             Register
//                           </Button>
//                         </div>
//                         <label className="form-check-label ps-3" for="form2Example3">
//                           Already Have an Account{" "}
//                           <Link to="/login">
//                             Please Login
//                           </Link>
//                         </label>
//                       </form>
//                     </div>
//                     <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                         className="img-fluid"
//                         alt="Sample image"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Registration;







import { SiGnuprivacyguard } from "react-icons/si";
import "./Registration.css";

const Registration = () => {
     return (
       <div className="d-flex w-75 ms-5">
         <div className="login-container">
           <div className="login-title">
             Sign up <SiGnuprivacyguard />
           </div>
           <form className="login-form">
             <input type="text" placeholder="Your Email" />
             <input placeholder="password" />

             <input type="password" placeholder="confirm password" />

             <button>Sign up</button>
           </form>
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

export default Registration;





