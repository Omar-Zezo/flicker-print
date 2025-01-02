import { getPackage } from "@/store/slices/packages/packageDetails";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UseFetchPackage = (getPackagetName) => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [package_details, setPackage_details] = useState(null);
  const [rates, setRates] = useState(null);
  const [usersReviews, setUsersReviews] = useState(null);
  const [products, setProducts] = useState(null);
  const [similarPackages, setSimilarPackages] = useState(null);
  const { data } = useSelector((state) => state.packageDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getPackage(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if(data.data.data.similar_packages){
            setSimilarPackages(data.data.data.similar_packages)
          }
          if (data.data.data.package_details) {
            setPackage_details(data.data.data.package_details);
            getPackagetName(data.data.data.package_details?.name)
          }
          if (data.data.data.products) {
            setLoaderStatus(false);
            setProducts(data.data.data.products);
          }
          if (data.data.data.rates) {
            setRates(data.data.data.rates);
            if (data.data.data.rates.rates) {
              if (data.data.data.rates.rates.data) {
                setUsersReviews(data.data.data.rates.rates.data)
              }
            }
          }
        }
      }
    }
  }, [data]);

  return { package_details, products, loaderStatus, rates, usersReviews, similarPackages };
};

export default UseFetchPackage;
