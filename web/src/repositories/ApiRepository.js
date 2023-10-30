import ApiClient from "./clients/apiClient";

const ApiRepository = {
  getSearch(product) {
    return ApiClient.get(`/items?q=${product}&max=4`);
  },
  getDetailProduct(id) {
    return ApiClient.get(`/items/${id}`);
  },
}

export default ApiRepository;
