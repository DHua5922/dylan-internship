import axios from "axios";

async function getHotCollectionsApi() {
  try {
    const response = await axios({
      method: "get",
      url: "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
    });
    return response.data;
  } catch (err) {
    return [];
  }
}

export { getHotCollectionsApi };
