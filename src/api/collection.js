import { axios } from ".";

async function getHotCollectionsApi() {
  try {
    const response = await axios({
      method: "get",
      url: "/hotCollections",
    });
    return response.data;
  } catch (err) {
    return [];
  }
}

export { getHotCollectionsApi };
