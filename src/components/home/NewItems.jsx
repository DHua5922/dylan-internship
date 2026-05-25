import React from "react";
import Carousel from "../UI/Carousel";
import Item from "../UI/Item";
import { ANIMATION_FADE_IN } from "../../constants";

const NewItems = ({ list, isLoading }) => {
  return (
    <section
      id="section-items"
      className="no-bottom"
      data-aos={ANIMATION_FADE_IN}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <Carousel>
            {list.map((item) => (
              <div className="carousel__item" key={item.id}>
                <Item item={item} isLoading={isLoading} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
