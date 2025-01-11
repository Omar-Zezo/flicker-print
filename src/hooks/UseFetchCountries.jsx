import { getCountries } from '@/store/slices/data/countries'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UseFetchCountries = () => {
      const [countries, setCountries] = useState(null)
      const {data} = useSelector(state=> state.countries)
    
      const dispatch = useDispatch()
    
      useEffect(()=>{
        dispatch(getCountries())
      },[])
    
      useEffect(()=>{
        if(data){
          if(data.data){
            if(data.data.data){
              setCountries(data.data.data)
            }
          }
        }
    },[data])

  return countries
}

export default UseFetchCountries