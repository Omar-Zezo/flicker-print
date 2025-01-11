import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const UseFetchCities = () => {
    const [cities, setCities] = useState(null)
    const {data} = useSelector(state=> state.cities)
  
    useEffect(()=>{
      if(data){
        if(data.data){
          if(data.data.data){
            setCities(data.data.data)
          }
        }
      }
  },[data])

  return cities
}

export default UseFetchCities