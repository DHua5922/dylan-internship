import { axios } from ".";

async function getTopSellersApi() {
  try {
    const response = await axios({
      method: "get",
      url: "/topSellers",
    });
    return response.data;
  } catch (err) {
    return [];
  }
}

export { getTopSellersApi };
