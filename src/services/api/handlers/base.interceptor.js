import { getActivationCode } from "@/utils/helper/activationCode";

export const interceptRequest = async (requestConfig) => {
  const activationCode = getActivationCode();

  if (requestConfig["method"] === "post") {
    requestConfig["data"] = { ...requestConfig["data"], activationCode };
  }
  return requestConfig;
};

export const interceptRequestError = (error) => {
  return Promise.reject(error);
};

export const interceptResponse = (response) => {
  return response;
};

export const interceptResponseError = (error) => {
  const res = error.response;
  if (res.status >= 500) {
    if (!res.config.headers["x-silent-status"]?.includes(res.status)) {
      alert(
        res.data.message ||
          res.data.error ||
          "Server Error\nPlease Refresh page and try again"
      );
    }
  }
  if (res.status === 401) {
    alert(
      res.data.message ||
        res.data.error ||
        "Auth Error\nPlease Refresh page and try again"
    );
  } else if (res.status >= 400 && res.status < 500) {
    alert(
      res.data.message || res.data.error || "Request Error\nPlease, try again"
    );
  }
  return Promise.reject(error);
};
