import { getSubCategories } from "@/store/slices/category/subcategory";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import UseLangDetection from "./UseLangDetection";


const UseFetchSubcategories = () => {
    const lang = UseLangDetection()
    const [mainCategoryDetails, setMainCategoryDetails] = useState(null)
    const [subCategoryDetails, setsubCategoriesDetails] = useState()
    const [loaderStatus, setLoaderStatus] = useState(true);
    const [total, setTotal] = useState([]);
    const [current_page, setCurrent_page] = useState(1);
    const {data} = useSelector((state) => state.subcategory);
    const dispatch = useDispatch()
  
    const { id } = useParams();
  
    useEffect(()=>{
      if(id){
        dispatch(getSubCategories(id))
      }
    },[id, lang])

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
  
    const handlePageClick = (event) => {
      navigate(`?page=${event.selected + 1}`);
    };
  
    useEffect(() => {
      if (page) {
        setCurrent_page(page);
        dispatch(getSubCategories({id, str: `page=${page}`}));
      } else {
        dispatch(getSubCategories({id, str: `page=${page}`}));
      }
    }, [page, lang]);
  
    useEffect(()=>{
      if(data){
        setLoaderStatus(false);
        if(data.data){
          if(data.data.data){
            if(data.data.data.main_category_details){
              setMainCategoryDetails(data.data.data.main_category_details)
            }
            if(data.data.data?.sub_categories){
              if(data.data.data.sub_categories.meta){
                setCurrent_page(data.data.data.sub_categories.meta.current_page)
                setTotal(data.data.data.sub_categories.meta.total)
              }
              setsubCategoriesDetails(data.data.data.sub_categories)
            }
          }
        }
      }
    },[data])
  

  return {mainCategoryDetails, subCategoryDetails, current_page, total, handlePageClick, loaderStatus}
}

export default UseFetchSubcategories