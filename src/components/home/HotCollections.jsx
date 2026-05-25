import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton";
import Carousel from "../UI/Carousel";

const HotCollections = ({ list, isLoading }) => {
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <Carousel>
            {list.map((item) => (
              <div className="carousel__item" key={item.id}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    {isLoading ? (
                      <Skeleton width="100%" height={200} />
                    ) : (
                      <Link to={`/item-details/${item.nftId}`}>
                        <img
                          src={item.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    )}
                  </div>
                  <div className="nft_coll_pp">
                    {isLoading ? (
                      <Skeleton width={50} height={50} borderRadius="50%" />
                    ) : (
                      <>
                        <Link to={`/author/${item.authorId}`}>
                          <img
                            className="lazy pp-coll"
                            src={item.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </>
                    )}
                  </div>
                  <div className="nft_coll_info">
                    {isLoading ? (
                      <>
                        <Skeleton width="50%" height={20} />
                        <br />
                        <Skeleton width="25%" height={20} />
                      </>
                    ) : (
                      <>
                        <Link to={`/item-details/${item.nftId}`}>
                          <h4>{item.title}</h4>
                        </Link>
                        <span>ERC-{item.code}</span>
                      </>
                    )}
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

export default HotCollections;
