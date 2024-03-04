import React from 'react';
// components
import Item from '../components/Item/Item';
// data
import { ShopContext } from '../Context/ShopContext';
// styles
import './CSS/ShopCategory.css';
// images
import Dropdown from '../assets/dropdown_icon.png';
export default function ShopCategory(props) {
  const { AllProduct } = React.useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="banner" src={props.banner} alt="" />
      <div className="category-of-sorted-indexes">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="sort-category-icon">
          Sorted by <img src={Dropdown} alt="" />
        </div>
      </div>
      <div className="sort-category-products">
        {AllProduct.map((item, index) => {
          if (props.category == item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">Explore more</div>
    </div>
  );
}
