import React from "react";
import { useAuth } from "../../contexts/AuthProvider";

const Home = () => {
  const { user } = useAuth();
  return <h1>Hello {user?.email}</h1>;
};

export default Home;
