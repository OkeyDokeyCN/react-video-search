import axios from "axios";

const KEY = "AIzaSyChIHbLMnvk7EEnzRTg3h9zCrfEGuE750o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
