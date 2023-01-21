import http from "../http-common.js";

// Create
const create = (data) => {
  return http.post("/meals", data);
};
// Retrieve
const get = (id) => {
  return http.get(`/meals/${id}`);
};
const getAll = () => {
  return http.get("/meals");
};
// Update
const update = (id, data) => {
  return http.put(`/meals/${id}`, data);
};
// Delete
const remove = (id) => {
  return http.delete(`/meals/${id}`);
};
const removeAll = () => {
  return http.delete(`/meals`);
};

const MealService = {
  create,
  get,
  getAll,
  update,
  remove,
  removeAll,
};

export default MealService;
