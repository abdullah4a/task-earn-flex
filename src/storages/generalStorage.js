
const getLocalItem = (key) => {
  const storedItem = localStorage.getItem(key);
  if (storedItem !== null || storedItem !== undefined) {
    try {
      const parsedData = JSON.parse(storedItem);
      return parsedData;
    } catch (err) {
      return storedItem;
    }
  } else {
    return null;
  }
};
const setLocalItem = (key, data) => {
  if (typeof data === "object") localStorage.setItem(key, JSON.stringify({ ...data }));
  else if (Array.isArray(data) || typeof data === "number") localStorage.setItem(key, JSON.stringify(data));
  else if (data === null || data === undefined) localStorage.setItem(key, null);
  else if (typeof data === "string") localStorage.setItem(key, data);
  else throw new Error("Invalid Data Type");
};
const deleteLocalItem = (key) => {
  localStorage.removeItem(key);
};
const deleteAllLocalItems = () => {
  localStorage.clear();
};
export const generalStorage = {
  getLocalItem,
  setLocalItem,
  deleteLocalItem,
  deleteAllLocalItems,
};