import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import GetToken from "./functions/GetToken";
import ParseJwt from "./Functions/VerifyToken";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = GetToken();
    if (userToken) {
      const decodedToken = ParseJwt(userToken);
      if (decodedToken.exp * 1000 > Date.now()) {
        setIsLoggedIn(true);
      } else {
        handleLogout();
      }
    }
  }, []);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  return (
    <>
      <NavBar onLogout={handleLogout} />
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </>
  );
}

export default App;
