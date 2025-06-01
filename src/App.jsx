import Aboutme from "./components/Pages/Aboutme";
import Home from "./components/Pages/Home";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./Layout";
import Services from "./components/Pages/Services";
import Gigs from "./components/Pages/Gigs";
import Team from "./components/Pages/Team";
import Contactus from "./components/Pages/Contactus";
function App() {
  const router = createBrowserRouter([
  {
    path : "/",
    element :  <Layout/>,
    children : [
      {
        path : "/",
        element :  <Home/>
      },
      {
        path : "/aboutme",
        element :  <Aboutme/>
      },
      {
        path : "/services",
        element :  <Services/>
      },
      {
        path : "/gigs",
        element :  <Gigs/>
      },
      {
        path : "/team",
        element :  <Team/>
      },
      {
        path : "/contact",
        element :  <Contactus/>
      },
    ]
   }
])


  return (

    <div>
    <RouterProvider router={router}/>
    </div>
  
  )
}

export default App
