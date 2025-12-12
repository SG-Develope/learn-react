// import useFetch from "@/hooks/useFetch";
import useAxios from "@/hooks/useAxios";
import type { TodoInfoRes } from "@/types/todo";
import { ClipLoader } from "react-spinners";

function Todoinfo() {
  const id = window.location.pathname.split("/").pop();

  const { data, error, loading } = useAxios<TodoInfoRes>({
    url: `/todolist/${id}`,
  });
  return (
    <>
      <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 상세 조회</h2>

      {/* <!-- 로딩중일 때 로딩중 메시지 표시 --> */}
      {loading && (
        <ClipLoader
          color="red"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}

      {/* <!-- 에러가 있을 경우 빨간색으로 에러 메시지 표시 --> */}
      {error && (
        <p style={{ color: "red" }}>
          /todo/todolist/12345 리소스를 찾을 수 없습니다.
        </p>
      )}

      {data && (
        <div>
          <p>제목: {data.item.title}</p>
          <p>내용: {data.item.content}</p>
          <p>상태: {data.item.done ? "성공" : "실패"}</p>
          <p>작성일: {data.item.createdAt}</p>
          <p>수정일: {data.item.updatedAt}</p>
        </div>
      )}

      <a href="/">목록</a>
    </>
  );
}

export default Todoinfo;
