import { useEffect, useState } from "react";
import { getAuthorApi } from "../api/author";
import { useQuery } from "./query";

const placeholderData = {
  id: 0,
  authorName: "",
  tag: "",
  address: "",
  authorImage: "",
  authorId: 0,
  followers: 0,
  nftCollection: [
    {
      id: 1,
      nftImage: "",
      nftId: 0,
      title: "",
      price: 0,
      likes: 0,
    },
    {
      id: 2,
      nftImage: "",
      nftId: 0,
      title: "",
      price: 0,
      likes: 0,
    },
  ],
};

function useAuthor(id) {
  const { isLoading, data } = useQuery(() => getAuthorApi(id));
  const [author, setAuthor] = useState(data || placeholderData);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (data) setAuthor(data);
  }, [data]);

  return {
    author,
    isLoading,
    isFollowing,
    onUnfollow: () => {
      setAuthor((prev) => ({ ...prev, followers: prev.followers - 1 }));
      setIsFollowing(false);
    },
    onFollow: () => {
      setAuthor((prev) => ({ ...prev, followers: prev.followers + 1 }));
      setIsFollowing(true);
    },
  };
}

export { useAuthor };
