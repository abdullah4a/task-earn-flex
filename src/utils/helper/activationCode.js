import AuthAPI from "@/services/api/auth.service";

let activationCode = null;

export const fetchActivationCode = async () => {
  try {
    const { data } = await AuthAPI.login();
    activationCode = data.activationCode;
  } catch (error) {
    console.error(error);
  }
};

export const getActivationCode = () => activationCode;