import axiosClient from "./axiosClient";

const projectAPI = {
  getAll(params) {
    const url = "/project";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/project/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/project/${data.id}`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/project/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/project/${id}`;
    return axiosClient.delete(url);
  },
};
export default projectAPI;
