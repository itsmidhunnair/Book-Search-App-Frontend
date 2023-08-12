import React from 'react';
import { CircularProgress } from '@mui/material';

/**
 * Renders a circular loader component
 */
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
