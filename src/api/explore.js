import { axios } from ".";

async function getExploreApi(query) {
  try {
    const response = await axios({
      method: "get",
      url: `/explore${query ? `?filter=${query}` : ""}`,
    });
    return response.data;
  } catch (err) {
    return [];
  }
}

export { getExploreApi };
