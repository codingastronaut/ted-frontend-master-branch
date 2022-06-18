const APP_USER_TOKEN = "APP_USER_TOKEN";
const APP_USER = "APP_USER";

export const setUserToken = (value) => {
  localStorage.setItem(APP_USER_TOKEN, value);
};

export const getUserToken = () => {
  const token = localStorage.getItem(APP_USER_TOKEN);
  if (token) {
    return token;
  }
  return null;
};

export const setUserData = (data) => {
  if (data) {
    localStorage.setItem(APP_USER, JSON.stringify(data));
  }
};

export const getUserData = () => {
  const data = localStorage.getItem(APP_USER);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const getUserImg = () => {
  const data = localStorage.getItem(
    "https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg"
  );
  if (data) {
    return data;
  }
  return null;
};

export const clearAllData = () => {
  localStorage.removeItem(APP_USER_TOKEN);
  localStorage.removeItem(APP_USER);
};
