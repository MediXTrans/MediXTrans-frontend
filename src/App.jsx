import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Transcript from './components/Transcript/Transcript'
import AboutUs from './components/About Us/AboutUs'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path="/transcript" element={<Transcript />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/profile/:username" element={<Profile />} />  */}
    </Route>
  )
);


function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
