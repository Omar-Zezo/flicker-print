import { t } from 'i18next';
import ReactPaginate from 'react-paginate';


const Pagination = ({current_page, total, handlePageClick}) => {

  return (
    <div className={`${Math.ceil(total / 15) > 1 ? "block" : "hidden"}`}>
    <ReactPaginate
      breakLabel="..."
      nextLabel={t('next')}
      forcePage={current_page !== 0 ? current_page -1: 0}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(total / 15)}
      previousLabel={t('prev')}
      breakClassName="text-black-500"
      renderOnZeroPageCount={null}
      className="flex justify-center xl:gap-4 gap-2"
      pageLinkClassName="text-black-500 text-sm font-semibold min-w-8 h-8 px-1 flex items-center justify-center rounded-lg border border-[#F1F1F1]"
      activeLinkClassName="bg-blue-500 text-white"
      previousLinkClassName="text-blue-500 w-fit h-8 text-sm font-semibold px-2 flex items-center justify-center rounded-sm"
      nextLinkClassName="text-black-500 w-fit h-8 px-2 text-sm font-semibold flex items-center justify-center"
      disabledLinkClassName="opacity-50 cursor-not-allowed"
    />
    </div>
  )
}

export default Pagination