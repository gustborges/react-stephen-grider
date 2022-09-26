import axios from "axios";

const KEY = "AIzaSyBId26npzsKfetiCPCIapFAdP7ZsI1ev3E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
