// BigcategoriesPage.js
import React from "react";
import { useParams } from "react-router-dom";
import BreadcrumbsComponent from "./Breadcrumbs";

function BigcategoriesPage() {
  const { bigcategorie } = useParams();

  const breadcrumbsLinks = [
    { text: "Allproduct", link: "/Product" },
    { text: bigcategorie, link: `/categories/${bigcategorie}` },
  ];

  return (
    <div>
      <BreadcrumbsComponent links={breadcrumbsLinks} />

      {/* 大类下的产品列表 */}
      <section className="py-24">
        {/* 这里是你的产品列表代码 */}
      </section>
    </div>
  );
}

export default BigcategoriesPage;


