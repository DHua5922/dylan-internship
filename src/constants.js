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

const ANIMATION_FADE_IN = "fade-in";
const ANIMATION_FADE_UP = "fade-up";
const ANIMATION_FADE_LEFT = "fade-left";

export {
  placeholderItems,
  ANIMATION_FADE_IN,
  ANIMATION_FADE_UP,
  ANIMATION_FADE_LEFT,
};
