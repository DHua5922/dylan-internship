import React from "react";
import { Link } from "react-router-dom";
import Timer from "../UI/Timer";
import Skeleton from "../UI/Skeleton";
import Carousel from "../UI/Carousel";

const NewItems = ({ list, isLoading }) => {
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <Carousel>
            {list.map((item, index) => (
              <div className="carousel__item" key={`${item.id}-${index}`}>
                <div className="nft__item">
                  <div className="author_list_pp">
                    {isLoading ? (
                      <Skeleton borderRadius="50%" width="50px" height="50px" />
                    ) : (
                      <Link
                        to={`/author/${item.authorId}`}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                      >
                        <img className="lazy" src={item.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                      </Link>
                    )}
                  </div>

                  {isLoading ? (
                    <div className="de_countdown">
                      <Skeleton
                        width="75px"
                        height="100%"
                        borderRadius="10px"
                      />
                    </div>
                  ) : (
                    item.expiryDate && <Timer expiryDate={item.expiryDate} />
                  )}

                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-facebook fa-lg"></i>
                          </a>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter fa-lg"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-envelope fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    {isLoading ? (
                      <Skeleton
                        width="100%"
                        height="225px"
                        borderRadius="10px"
                      />
                    ) : (
                      <Link to={`/item/${item.nftId}`}>
                        <img
                          src={item.nftImage}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </Link>
                    )}
                  </div>
                  <div className="nft__item_info">
                    {isLoading ? (
                      <Skeleton
                        width="100px"
                        height="30px"
                        borderRadius="10px"
                      />
                    ) : (
                      <Link to={`/item/${item.nftId}`}>
                        <h4>{item.title}</h4>
                      </Link>
                    )}
                    <div className="nft__item_price">
                      {isLoading ? (
                        <Skeleton width="50px" height="20px" />
                      ) : (
                        `${item.price} ETH`
                      )}
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      {isLoading ? (
                        <Skeleton width="20px" height="10px" />
                      ) : (
                        <span>{item.likes}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
