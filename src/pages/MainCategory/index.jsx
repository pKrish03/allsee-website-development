import React from 'react';
import { useParams } from 'react-router';

const MainCategories = () => {
  const {mainCategory} = useParams();

  return <p>{mainCategory}</p>;
};
export default MainCategories
