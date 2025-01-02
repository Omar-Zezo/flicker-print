import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseProtectRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/signup");
    }
  }, [localStorage.getItem("token")]);

};

export default UseProtectRoute;
