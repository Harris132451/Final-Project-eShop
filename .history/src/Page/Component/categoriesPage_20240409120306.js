// BigcategoriesPage.js
import React from "react";
import { useParams } from "react-router-dom";
import BreadcrumbsComponent from "./Breadcrumbs";
import item from "./product"
import { Link } from "react-router-dom";

function BigcategoriesPage() {
  const { bigcategorie } = useParams();

  const breadcrumbsLinks = [
    { text: "Allproduct", link: "/Product" },
    { text: bigcategorie, link: `/categories/${bigcategorie}` },
  ];

  return (
    <div>
      <BreadcrumbsComponent links={breadcrumbsLinks} />
      123
    </div>
  );
}

export default BigcategoriesPage;


