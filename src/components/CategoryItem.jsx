import React from "react";

const CategoryItem = ({ img, name }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <img src={img} alt={name} style={{ maxWidth: "200px" }} /> <br />
      {name}
    </div>
  );
};

export default CategoryItem;
