import Link from "next/link";
import React from "react";
import { categories_1 } from "./Categories_Data";
import { categories_2 } from "./Categories_Data";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Our Categories</h2>
        </div>
        <div className="categories-item-container">
        {categories_1.map((item, index) => (
            <div className="categories-item" key={index}>
              <a href="/checkprice" target="_blank"><img async src={item.image} alt="" className="img-fluid"/></a>
              <Link href="/checkprice"><p>{item.title}</p></Link>
            </div>
          ))}
        {categories_2.map((item, index) => (
            <div className="categories-item" key={index}>
              <a href="/checkprice" target="_blank"><img async src={item.image} alt="" className="img-fluid " /></a>
              <Link href="/checkprice"><p>{item.title}</p></Link>
            </div>
          ))}

        </div >
      </div>
    </section>
  );
};

export default Categories;
