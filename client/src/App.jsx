import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Gigs from "./pages/Gigs";
import Gig from "./pages/Gig";
import Orders from "./pages/Orders";
import MyGigs from "./pages/MyGigs";
import AddGig from "./pages/AddGig";
import Message from "./pages/Message";
import Messages from "./pages/Messages";
 
function App() {
  const Layout =()=>{
    return (
      <div className="">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/gigs",
            element: <Gigs />,
          },
          {
            path: "/gigs/:id",
            element: <Gig />,
          },
          {
            path: "/Orders",
            element: <Orders />,
          },
          {
            path: "/mygigs",
            element: <MyGigs />,
          },
          {
            path: "/create-gig",
            element: <AddGig />,
          },
          {
            path: "/message/:id",
            element: <Message />,
          },
          {
            path: "/messages",
            element: <Messages />,
          },

        ],
      },
    ]);

  return (
    <div className=" ">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
