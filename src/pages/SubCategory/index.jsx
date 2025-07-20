import React from 'react'
import { useParams } from 'react-router-dom';

const SubCategories = () => {
  const {mainCategory,subCategory}= useParams();

  return <p>{mainCategory}/{subCategory}</p>;
};

export default SubCategories
