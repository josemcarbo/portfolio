const APP_KEY = "portfolio";

const setAppData = (value) => localStorage.setItem(APP_KEY, value);
const getAppData = () => {
  const data = localStorage.getItem(APP_KEY);
  return data ? JSON.parse(data) : {};
};
const removeAppData = () => localStorage.removeItem(APP_KEY);