import React, { useCallback, useRef, useState } from "react";
import useBookSearch from "../hooks/useBookSearch";

const InfiniteScroll = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastElementRef = useCallback((node) => {
    console.log(node);
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
        console.log('Visible');
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })
    if(node) observer.current.observe(node);
  }, [loading, hasMore]);

  function handleChange(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div
              ref={lastElementRef}
              key={book}
              style={{background: 'yellow'}}
            >
              {book}
            </div>
          );
        }
        return (
          <div key={book} >
            {book}
          </div>
        );
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
};

export default InfiniteScroll;
