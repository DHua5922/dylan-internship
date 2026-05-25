import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton";
import { ANIMATION_FADE_IN } from "../../constants";

const TopSellers = ({ list, isLoading }) => {
  return (
    <section id="section-popular" className="pb-5" data-aos={ANIMATION_FADE_IN}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {list.map((author) => (
                <li key={author.id}>
                  <div className="author_list_pp">
                    <Link to={`/author/${author.authorId}`}>
                      {isLoading ? (
                        <Skeleton
                          borderRadius="50%"
                          width="50px"
                          height="50px"
                        />
                      ) : (
                        <img
                          className="lazy pp-author"
                          src={author.authorImage}
                          alt=""
                        />
                      )}
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    {isLoading ? (
                      <Skeleton width="100px" height="10px" />
                    ) : (
                      <Link to={`/author/${author.authorId}`}>
                        {author.authorName}
                      </Link>
                    )}
                    <span>
                      {isLoading ? (
                        <Skeleton width="50px" height="10px" />
                      ) : (
                        `${author.price} ETH`
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
