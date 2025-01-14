import axios from "axios";
console.log(process.env);
const request = axios.create({
    baseURL: "https://tiktok.fullstack.edu.vn/api/",

});
export const get = async (Path2D, options = {}) => {
    const response = await request.get(Path2D, options);
    return response.data;
}

export default request;