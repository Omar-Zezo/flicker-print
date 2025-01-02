import { useDispatch, useSelector } from "react-redux";
import UseLangDetection from "./UseLangDetection";
import { useEffect, useState } from "react";

const UseFetchPolicy = (dispatchMethod) => {
  const lang = UseLangDetection();
  const {data} = useSelector(state=> state.policy)
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(dispatchMethod());
  }, [lang]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.description) {
            setContent(data.data.data.description);
          }
        }
      }
    }
  }, [data]);

  return content;
};

export default UseFetchPolicy;