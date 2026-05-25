import React from "react";
import { useParams } from "react-router-dom";
import { useAuthor } from "../hooks/author";
import Item from "../components/UI/Item";
import Skeleton from "../components/UI/Skeleton";

const onClickCopyAddress = (text) => async () => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const Author = () => {
  const { id } = useParams();
  const { author, isLoading, isFollowing, onFollow, onUnfollow } =
    useAuthor(id);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {isLoading ? (
          <Skeleton width="100%" height="350px" />
        ) : (
          <section
            id="profile_banner"
            aria-label="section"
            className="text-light"
            data-bgimage={`url(${author.authorImage}) top`}
            style={{ background: `url(${author.authorImage}) top` }}
          ></section>
        )}

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {isLoading ? (
                        <Skeleton
                          width="150px"
                          height="150px"
                          borderRadius="50%"
                        />
                      ) : (
                        <img src={author.authorImage} alt="" />
                      )}

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        {isLoading ? (
                          <div>
                            <Skeleton width="200px" height="30px" />
                            <br />
                            <Skeleton width="150px" height="30px" />
                            <br />
                            <Skeleton width="200px" height="20px" />
                          </div>
                        ) : (
                          <h4>
                            {author.authorName}
                            <span className="profile_username">
                              @{author.tag}
                            </span>
                            <span id="wallet" className="profile_wallet">
                              {author.address}
                            </span>
                            <button
                              id="btn_copy"
                              title="Copy Text"
                              onClick={onClickCopyAddress(author.address)}
                            >
                              Copy
                            </button>
                          </h4>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      {isLoading ? (
                        <Skeleton width="210px" height="50px" />
                      ) : (
                        <>
                          <div className="profile_follower">
                            {author.followers} followers
                          </div>
                          <button
                            className="btn-main"
                            onClick={isFollowing ? onUnfollow : onFollow}
                          >
                            {isFollowing ? "Unfollow" : "Follow"}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {author.nftCollection.map((nft) => (
                <div
                  key={nft.id}
                  className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  style={{ display: "block", backgroundSize: "cover" }}
                >
                  <Item
                    item={{
                      ...nft,
                      authorImage: author.authorImage,
                      authorId: author.authorId,
                    }}
                    isLoading={isLoading}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
