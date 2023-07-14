import React from "react";
import styles from "./categoryListing.module.css";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const CategoryListing = ({ categories, onCategoryClick }) => {
  const handleCategoryClick = (categoryId) => {
    onCategoryClick(categoryId);
  };




  return (


    <section className={styles["category-listing-container"]}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {categories.map((category) => (
          <BreadcrumbItem key={category.id}>
            <BreadcrumbLink to={`/categories/${category.id}`} className={styles["breadcrumb-link"]}
            onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

     
    </section>
  );
};

export default CategoryListing;
