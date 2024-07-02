import axios from "axios";

//  GET Token Expires in few sec
// https://api.findofficers.com/hiring_test GET Need Token
// https://api.findofficers.com/hiring_test/add_employee POST Need Token
const AuthAPI = {
  login() {
    return axios.post(process.env.VUE_APP_API_ENDPOINT+"/get_activation_code", {headers:{
      "Content-Type": "application/json",
    }});
  },
};

export default AuthAPI;
