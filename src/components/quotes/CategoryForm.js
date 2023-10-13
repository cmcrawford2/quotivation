import React from "react";
import { Filter } from "react-feather";

export default function CategoryForm({
  categories,
  category,
  handleCategoryChange,
}) {
  return (
    <div className="category-form">
      <Filter />
      <form className="category-filter">
        <label htmlFor="category">Filter Quotes:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
