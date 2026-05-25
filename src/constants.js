const placeholderItems = Array.from({ length: 6 }).map((_, index) => ({
  id: index,
  authorId: 0,
  authorImage: "",
  nftImage: "",
  nftId: 0,
  title: "",
  price: 0,
  likes: 0,
  expiryDate: 0,
}));

export { placeholderItems };
