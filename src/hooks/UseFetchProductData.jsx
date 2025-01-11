import { getProductDetails } from "@/store/slices/product/productDetails";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UseFetchProductData = (getProductName) => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [rates, setRates] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null);
  const [usersReviews, setUsersReviews] = useState(null);
  const [product, setProduct] = useState(null);
  const [attributes, setAttributes] = useState(null);
  const [photo_gallery, setPhoto_gallery] = useState();
  const { data } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if(data.data.data.attributes){
            setAttributes(data.data.data.attributes)
          }
          if(data.data.data.photo_gallery){
            setPhoto_gallery(data.data.data.photo_gallery)
          }
          if (data.data.data.similar_products) {
            setLoaderStatus(false);
            setSimilarProducts(data.data.data.similar_products);
          }
          if (data.data.data.product_details) {
            getProductName(data.data.data.product_details?.name)
            setProduct(data.data.data.product_details);
            if (data.data.data.rates) {
              setRates(data.data.data.rates);
            }
            if (data.data.data.rates.rates) {
              if (data.data.data.rates.rates.data) {
                setUsersReviews(data.data.data.rates.rates.data);
              }
            }
          }
        }
      }
    }
  }, [data]);

  return { rates, similarProducts, usersReviews, product, attributes, loaderStatus, photo_gallery };
};

export default UseFetchProductData;
