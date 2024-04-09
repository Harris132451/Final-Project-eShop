import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

function BreadcrumbsComponent({ links }) {
  return (
    <Breadcrumbs>
      {links.map((link, index) => (
        <span key={index} className="opacity-60">
          {link.text}
        </span>
      ))}
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;