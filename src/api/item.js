import { axios } from ".";

async function getNewItemsApi() {
  try {
    const response = await axios({
      method: "get",
      url: "/newItems",
    });
    return response.data;
  } catch (err) {
    return [];
  }
}

async function getItemDetailsApi(nftId) {
  try {
    const response = await axios({
      method: "get",
      url: `/itemDetails?nftId=${nftId}`,
    });
    return response.data;
  } catch (err) {
    return {};
  }
}

export { getNewItemsApi, getItemDetailsApi };
