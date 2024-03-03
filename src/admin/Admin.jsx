import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";
import GetToken from "../utilis/AppAuth";

function Admin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!GetToken()) {
      navigateTo("/login");
      return;
    }
  }, [navigateTo]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default Admin;
