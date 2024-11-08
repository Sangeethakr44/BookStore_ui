import React from "react";
import "./ExploreMenu.css";
import { book_category_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-book" id="explore-book">
      <h1>Explore Our Book</h1>
      <p className="explore-book-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione
        atque laboriosam, minus molestiae sunt debitis id quasi qui ea fuga
        corrupti, accusantium assumenda dolorem modi aliquam illo aliquid
        excepturi?
      </p>
      <div className="explore-book-list">
        {book_category_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.book_category_name
                    ? "All"
                    : item.book_category_name
                )
              }
              key={index}
              className="explore-book-list-item"
            >
              <img
                className={category === item.book_category_name ? "active" : ""}
                src={item.book_image}
                alt=""
              />
              <p>{item.book_category_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
