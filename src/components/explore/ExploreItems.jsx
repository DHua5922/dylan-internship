import React, { useState } from "react";
import Item from "../UI/Item";

const ExploreItems = ({ list, isLoading, filter, onChangeFilter }) => {
  const [showEndIndex, setShowEndIndex] = useState(8);
  return (
    <>
      <div>
        <select id="filter-items" value={filter} onChange={onChangeFilter}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {list.slice(0, showEndIndex).map((item) => (
        <div
          key={item.id}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <Item item={item} isLoading={isLoading} />
        </div>
      ))}
      <div className="col-md-12 text-center">
        {showEndIndex < list.length && (
          <button
            id="loadmore"
            className="btn-main lead"
            onClick={() => setShowEndIndex(showEndIndex + 4)}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
