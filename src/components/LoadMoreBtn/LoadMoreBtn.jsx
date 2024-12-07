
export default function LoadMoreBtn ({getNextPage}){
    const loadMore = () => {
    getNextPage();
  };

    return (
        <button onClick={loadMore}>Load more...</button>
    )
}