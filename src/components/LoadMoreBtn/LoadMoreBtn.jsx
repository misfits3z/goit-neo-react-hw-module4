import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn ({getNextPage}){
    const loadMore = () => {
    getNextPage();
  };

    return (
        <button className={css.btnLoadMore}onClick={loadMore}>Load more...</button>
    )
}