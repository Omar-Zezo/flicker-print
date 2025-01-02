import UseFetchPolicy from '@/hooks/UseFetchPolicy';
import Spiner from '@/utils/Spiner';
import parse from 'html-react-parser';

const ContentContainer = ({dispatchMethod}) => {
const content = UseFetchPolicy(dispatchMethod)
  
  return (
    <div className="flex flex-col pb-5 policy"
    >
      {
        content ? (
          parse(content)
        ):(
          <Spiner/>
        )
      }
    </div>
  )
}

export default ContentContainer