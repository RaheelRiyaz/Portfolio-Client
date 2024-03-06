import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import GetToken from "../utilis/AppAuth";
import { context } from "./context/Context";
function Admin() {
  const [techs, setTechs] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!GetToken()) {
      navigateTo("/login");
      return;
    }
  }, [navigateTo]);

  return (
    <context.Provider
      value={{
        techs,
        setTechs,
      }}
    >
      <Header />
    </context.Provider>
  );
}

export default Admin;
