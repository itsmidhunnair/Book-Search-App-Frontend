import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <>
      <CircularProgress
        color="inherit"
        sx={{ marginLeft: '50%', marginTop: '50px' }}
      />
    </>
  );
};

export default Loader;
