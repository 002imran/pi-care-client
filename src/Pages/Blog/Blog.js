import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="m-5 text-center">Welcome to Our Blog Page!</h2>
      <h4>What is cors?</h4>
      <p>
        Cross Origin Resources Sharing(CORS) is an HTTP header based mechanism
        that allows a server to share its data another domain. A webpage free
        can embed cross-origin images, stylesheet, scripts, iframes, video or
        any data.
      </p>
      <h4>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h4>
      <p>
        The Firebase real time Databse lets us build rich ,collaborative
        application by allowing secure access to the database directly from
        client side code. Data is reserved locally and even while offline
        realtime events continue to fire, giving the end user a responsive
        experience
      </p>
      Other Options that have to implement authentication.
      <br />* Biometric Authentication/Retina Authentication <br /> * Token
      Based Authentication <br />* Multifactor Authentication <br />*
      Certificate Based Authentication
      <h4>How does the private route work?</h4>
      <p>
        The Private route is protected route use can not visite this route with
        out login or user id. Private route component renders child components
        if logged in, if not it will take direct login with the return url
        passed in the location state property.
      </p>
      <h4>What is Node? How does Node work?</h4>
      <p>
        Node.JS is an open source cross platform JavaScript runtime environment
        and library for runtime web application outside the client browsers.
      </p>
      How Node Works?
      <p>
        It is used as backend services where JavaScript works on the server side
        of the application. This way JavaScript works on both in frontend and
        backend. Node Js Runs on v8 engine which converts javascripts code into
        machine code, it is highly scalable, lightweight, fast, and
        data-intensive.
      </p>
    </div>
  );
};

export default Blog;
