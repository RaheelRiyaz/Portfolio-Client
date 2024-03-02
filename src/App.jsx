import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./user/components/Navbar";
import Footer from "./user/components/Footer";

function App() {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
