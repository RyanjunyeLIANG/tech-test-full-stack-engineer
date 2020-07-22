import React from 'react';

const ResultDisplay = ({children, ...rest}) => (
  <div {...rest}>
    {children}
  </div>
);

export default ResultDisplay;