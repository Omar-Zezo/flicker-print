import { getLoggedUser } from "@/store/slices/auth/loggeduser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UseGetLoggedUser = () => {
  const [isAuth, setIsAuth] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const { data } = useSelector((state) => state.loggeduser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  // useEffect(()=>{
  //   if(!localStorage.getItem("token")){
  //     setIsAuth(false)
  //   }
  // },[localStorage.getItem("token")])

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setLoggedUserData(data.data.data);
          if(data.data.data.email_verified_at){
            setIsAuth(data.data.data.email_verified_at);
          }
        }
      }
    }
  }, [data]);

  return {isAuth, setIsAuth, loggedUserData}
};

export default UseGetLoggedUser;