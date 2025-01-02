import { getQuestions } from '@/store/slices/question/questions';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UseLangDetection from './UseLangDetection';

const UseGetQuestions = () => {
    const [questions, setQuestions] = useState(null);
    const [loaderStatus, setLoaderStatus] = useState(true);
    const { data } = useSelector((state) => state.questions);
    const lang = UseLangDetection()
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getQuestions());
    }, [lang]);
  
    useEffect(() => {
      if (data) {
        setLoaderStatus(false)
        if (data.data) {
          if (data.data.data) {
            setQuestions(data.data.data);
          }
        }
      }
    }, [data]);

  return {questions, loaderStatus} 
}

export default UseGetQuestions