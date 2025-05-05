import React from 'react';

const DataFetch = async () => {
    const res = await fetch('/faqs.JSON');
  const data = await res.json();
  return data;
};

export default DataFetch;