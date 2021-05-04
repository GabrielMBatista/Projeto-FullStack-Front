import axios from "axios";
const KEY = "AIzaSyA5qXTSw0D9OtrrX3_yXLCjDMs5jdULMNA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
}); 