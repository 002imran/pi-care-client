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
import Faq from './Pages/Faq/Faq';
import PrivateRoute from './Routes/Routes/PrivateRoute';
import ErrorPage from './Pages/Error/ErrorPage';
import CourseNews from './CourseNews/CourseNews';
import Checkout from './Pages/Checkout/Checkout';
// import { routes } from './Routes/Routes/Routes';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://picare-server-site.vercel.app/course-news"),
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
          path: "/faq",
          element: <Faq></Faq>
          
        },
        {
          path: "/checkout",
          element: (
            <PrivateRoute>
              <Checkout></Checkout>
            </PrivateRoute>
          ),
        },
        {
          path: "/course/:id",
          element: <Course></Course>,
          loader: ({ params }) =>
            fetch(`https://picare-server-site.vercel.app/course/${params.id}`),
        },
        {
          path: "/details/:id",
          element: <CourseNews></CourseNews>,
          loader: ({ params }) =>
            fetch(`https://picare-server-site.vercel.app/course-news/${params.id}`),
        },
      ],
    },
  ]);
  return(
    <RouterProvider router={router}></RouterProvider>
  
  );
}

export default App;
