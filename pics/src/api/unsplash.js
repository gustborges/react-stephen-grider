import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID w-O65u8gVa_aFNTh4VO24Avadhrk2QPQu4k0dyHHh4I",
  },
});
