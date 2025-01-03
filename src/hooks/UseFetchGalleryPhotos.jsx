import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import UseLangDetection from "./UseLangDetection";
import { getGalleryPhoto } from "@/store/slices/gallery/photo-gallery";

const UseFetchGalleryPhotos = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [total, setTotal] = useState([]);
  const [current_page, setCurrent_page] = useState(1);
  const { data } = useSelector((state) => state.galleryPhoto);

  const dispatch = useDispatch();

  const lang = UseLangDetection()

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handlePageClick = (event) => {
    navigate(`?page=${event.selected + 1}`);
  };

  useEffect(() => {
    if (page) {
      setCurrent_page(page);
      dispatch(getGalleryPhoto({ str: `page=${page}`}));
    } else {
      dispatch(getGalleryPhoto({ str: `page=${page}`}));
    }
  }, [page, lang]);

  useEffect(() => {
    if (data) {
      setLoaderStatus(false);
      if (data.data) {
        if (data.data.data) {
        setFetchedData(data.data.data);
          if (data.data.data.meta)
            if (data.data.data.meta) {
              setTotal(data.data.data.meta.total);
              setCurrent_page(data.data.data.meta.current_page);
            }
        }
      }
    }
  }, [data]);

  return { fetchedData, loaderStatus, current_page, total, handlePageClick };
};

export default UseFetchGalleryPhotos;
