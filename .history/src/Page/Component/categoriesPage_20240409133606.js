import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from './categoriesData';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const category = categories.find(cat => cat.Name === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }

  const { subcategories } = category;

  // 根据 subcategories 渲染相应的产品内容

  return (
    <div>
      <h1>{categoryName}</h1>
      {/* 渲染产品内容 */}
    </div>
  );
};

export default categoriesPage


