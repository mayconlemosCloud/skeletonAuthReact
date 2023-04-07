import { Route, Routes } from "react-router-dom";
import AuthRequire from "./Hooks/AuthRequire";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import NavBar from "./Components/NavBar";
import { useAuth } from "./contexts/AuthProvider";

function App() {
  const { isAuth } = useAuth();
  console.log(isAuth);
  return (
    <div className="App">
      {isAuth ? <NavBar /> : <></>}
      <Routes>
        <Route
          path="/"
          element={
            <AuthRequire>
              <Home />
            </AuthRequire>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
