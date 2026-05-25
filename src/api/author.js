import { axios } from ".";

async function getAuthorApi(authorId) {
  try {
    const response = await axios({
      method: "get",
      url: `/authors?author=${authorId}`,
    });
    return response.data;
  } catch (err) {
    return {};
  }
}

export { getAuthorApi };
