import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CategoryItems = ({ items }) => {
  // dispatch an action
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-5 bg-slate-50 mb-3">
      {items?.map((itemDish) => (
        <div
          key={itemDish?.card?.info?.id}
          className="flex justify-between mb-5 border-b-2 p-4"
        >
          <div className="w-8/12">
            <p className="text-lg font-bold">
              {itemDish?.card?.info?.category}
            </p>
            <p className="font-semibold mb-3">
              ₹
              {itemDish?.card?.info?.defaultPrice
                ? itemDish?.card?.info?.defaultPrice / 100
                : itemDish?.card?.info?.price / 100}
            </p>
            <p>{itemDish?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative">
            <img
              className="w-full rounded-lg"
              src={CDN_URL + itemDish?.card?.info?.imageId}
              alt="dish-image"
            />
            <div className="absolute bottom-1">
              <button
                className="px-5 mx-5 rounded bg-black text-white shadow-lg"
                onClick={() => handleAddItem(itemDish)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
