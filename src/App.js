import './App.css';
// import Footer from './Pages/Shared/Footer/Footer';
// import Header from './Pages/Shared/Header/Header';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Login from './Pages/Login/Login/Login';
import Blog from './Pages/Blog/Blog';
import Course from './Pages/Course/Course';
import Registration from './Pages/Login/Registration/Registration';
import Home from './Pages/Home/Home';
// import { routes } from './Routes/Routes/Routes';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("http://localhost:5000/course-details")
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Registration></Registration>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/course/:id",
          element: <Course></Course>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/course/${params.id}`)
        },
      ],
    },
  ]);
  return(
    <RouterProvider router={router}></RouterProvider>
  
  );
}

export default App;
