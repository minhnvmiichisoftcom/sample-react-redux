import { api } from "./api";

export const userListService = {
  fetchUserList: function() {
    return api.get('/posts');
  },
};