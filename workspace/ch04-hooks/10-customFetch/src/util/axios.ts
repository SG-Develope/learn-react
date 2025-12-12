import axios from "axios";

const axiosElem = axios.create({
  baseURL: "https://fesp-api.koyeb.app/todo", // 기본 URL
  timeout: 3000, // 지정한 시간이 지나도록 응답이 완료되지 않으면 timeout 에러 발생
  headers: {
    "content-type": "application/json", // request의 데이터 타입
    accept: "application/json", // 선호하는 응답 데이터 타입
  },
});


export default axiosElem;