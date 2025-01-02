import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const UseFetchSpecialProducts = (data, dispatchMethod) => {
const [products, setProducts] = useState(null)
const [loaderStatus, setLoaderStatus] = useState(true);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(dispatchMethod());
  }, []);

  useEffect(() => {
    if (data) {
      setLoaderStatus(false)
      if (data.data) {
        if (data.data.data) {
          if (data.data.data) {
            setProducts(data.data.data?.slice(0,4));
          }
        }
      }
    }
  }, [data]);

  return {products, loaderStatus}
};

export default UseFetchSpecialProducts;
