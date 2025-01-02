import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UseLangDetection from "./UseLangDetection";
import { useSearchParams } from "react-router-dom";

const UseFetchTrendingProducts = (data, dispatchMethod, setSelected) => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const lang = UseLangDetection()

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams()
    const category_id_trend_request = searchParams.get("category_id_trend_request")


  useEffect(() => {
    if(category_id_trend_request){
      setSelected(Number(category_id_trend_request-1))
      dispatch(dispatchMethod(category_id_trend_request));
    }else{
      dispatch(dispatchMethod(''));
    }
  }, [lang, category_id_trend_request]);

  useEffect(() => {
    if (data) {
      setLoaderStatus(false);
      if (data.data) {
        if (data.data.data) {
          if (data.data.data) {
            setProducts(data.data.data.products?.slice(0, 8));
          }
          if(data.data.data.categories){
            setCategories(data.data.data.categories)
          }
        }
      }
    }
  }, [data]);

  return { products, loaderStatus, setLoaderStatus, categories };
};

export default UseFetchTrendingProducts;
