// import axios from "axios";
import API from "./handlers/base.service";

const usersService = {
  async getUsers(payload) {
    return await API.post("/get_all_employee", {...payload});
  },
  async addUser(payload) {
    return await API.post("/get_all_employee", { ...payload });
  },
};

export default usersService;
