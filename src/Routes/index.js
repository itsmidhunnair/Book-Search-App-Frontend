import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDisplay from '../components/display/BookDisplay';
import BookListing from '../components/listing/BookListing';

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<BookListing />} />
      <Route path="/book/:id" element={<BookDisplay />} />
      <Route path="/:search/:index" element={<BookListing />} />
    </Routes>
  );
};

export default RouterComp;
