import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import _ from 'lodash';
import SearchBar from './SearchBar';
import useSearch from '../../hooks/useSearch';
import Books from './Books';
import { searchBookQuery } from '../../graphQl/query';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../store/slice';
import Loader from '../common/Loader';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const BookListing = () => {

  const dispatch = useDispatch();

  let [searchParams] = useSearchParams()

  
  const { editedBooks } = useSelector((state) => state.book);
  
  const [searchBooks, { data: books, loading, error }] =
  useLazyQuery(searchBookQuery);
  
  const { submitSearch, nextButton } = useSearch(searchBooks);
  
  const filter = searchParams.get('filter');
  const search = searchParams.get('search');
  const index = parseInt(searchParams.get('index'));

  console.log(search, index);

  useEffect(() => {
    if (search && index) {
      searchBooks({ variables: { input: { search, index, filter: filter } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, index, filter]);

  useEffect(() => {
    if (books) {
      dispatch(getBooks(books));
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <SearchBar submitSearch={submitSearch} search={search} />
      {loading ? (
        <Loader />
      ) : !loading && _.size(editedBooks) === 0 ? (
        <h1 style={{ textAlign: 'center' }}>No Books Found...</h1>
      ) : (
        <Books books={editedBooks} nextButton={nextButton} activePage={index} />
      )}
    </>
  );
};

export default BookListing;
