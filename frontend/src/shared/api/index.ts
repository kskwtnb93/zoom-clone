import axios from "axios";
import { addAuthorizationHeader } from "./interceptors/request";

const baseURL = import.meta.env.VITE_API_URL;
const api = axios.create({ baseURL });
api.defaults.headers.common["Content-Type"] = "application/json";
// リクエストをインターセプトして、Authorizationヘッダーを追加する
api.interceptors.request.use(addAuthorizationHeader);

export default api;
