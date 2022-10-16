import axios from "axios";

const api = "http://localhost:5000/api/";

export const get = async (route) => {
  return await axios
    .get(`${api}${route}`);
};

export const post = async (route, payload)=> {
  const res = await axios
    .post(`${api}${route}`, payload);
  return res;
};

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await post(
      "auth/login",
      userCredentials
    );
    console.log("login res")
    console.log(res)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    return res.data;
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    return null;
  }
};

export const logoutCall = async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
