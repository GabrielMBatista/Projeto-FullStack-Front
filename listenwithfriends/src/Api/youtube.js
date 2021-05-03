import axios from "axios";
const KEY = "AIzaSyBqMdGykh65FdKo97cLFbHTRbd3vHZYVns";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
}); 