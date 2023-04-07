import { useAuth } from "../../contexts/AuthProvider";
import LoginPage from "../../Pages/LoginPage";

const AuthRequire = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <LoginPage />;
  }

  return children;
};

export default AuthRequire;
