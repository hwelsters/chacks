import axios from "axios";

export const get = () => {
  axios
    .get("https://5q7939pbb0.execute-api.us-east-1.amazonaws.com/items/2")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {});
};
