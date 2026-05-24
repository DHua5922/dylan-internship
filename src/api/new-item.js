import axios from "axios";

async function getNewItemsApi() {
  try {
    const response = await axios({
      method: "get",
      url: "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
    });
    return response.data;
  } catch (err) {
    return [];
  }
}

export { getNewItemsApi };
