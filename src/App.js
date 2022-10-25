import './App.css';
// import Footer from './Pages/Shared/Footer/Footer';
// import Header from './Pages/Shared/Header/Header';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Login from './Pages/Login/Login/Login';
import Blog from './Pages/Blog/Blog';
// import { routes } from './Routes/Routes/Routes';


function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }])
  return(
    <RouterProvider router={router}></RouterProvider>
  
  );
}

export default App;
