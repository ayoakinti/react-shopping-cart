require("dotenv").config();

// const baseURL = "http://localhost:8080";
const baseURL = process.env.REACT_APP_BASE_URL;

export default baseURL;
