import { getFeaturedCategories } from "@/store/slices/category/featuredCategories";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UseFeaturedCategoriesHome = () => {
const [fetchedData, setFetchedData] = useState()
const [loaderStatus, setLoaderStatus] = useState(true);

const {data} = useSelector(state=> state.featuredCategories)

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getFeaturedCategories())
},[])

useEffect(()=>{
  if(data){
    setLoaderStatus(false)
    if(data.data){
      if(data.data.data){
        setFetchedData(data.data.data)

      }
    }
  }
},[data])

  return {fetchedData, loaderStatus}
}

export default UseFeaturedCategoriesHome