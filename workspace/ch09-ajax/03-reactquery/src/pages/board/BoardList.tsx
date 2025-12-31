import { useState, type ReactEventHandler } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAxiosInstance } from "@/utils/axiosInstance";
import type { BoardInfo as BoardInfoType, BoardListRes } from "@/types/board";
import BoardInfo from "./BoardInfo";

function BoardList() {
  const [postId, setPostId] = useState<number | null>(null);

  const axiosInstance = getAxiosInstance();

  const { data, isLoading, error } = useQuery<BoardInfoType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axiosInstance.get<BoardListRes>(`/posts`);
      return response.data.item;
    },
  });

  console.log("data첫번째 게시물", data);

  return (
    <>
      <h1>게시물 목록</h1>
      <ul>
        {/* <li id="1" onClick={clickHandle}>1번 어쩌고 저쩌고</li>
                <li id="2" onClick={clickHandle}>2번 어쩌고 저쩌고</li> */}
        {/* {data && data.map((item)=>( <li id={String(item._id)}>2번 어쩌고 저쩌고</li>) */}

        {isLoading && (
          <>
            <h3>로딩중...</h3>
            <p>잠시만 기다려 주세요</p>
          </>
        )}
        {error && (
          <>
            <h3>에러 발생!!!</h3>
            <p>{error.message}</p>
          </>
        )}

        {data &&
          data.map((item) => (
            <li
              key={item._id}
              onClick={() => setPostId(item._id)}
              style={{ cursor: "pointer" }}
            >
              {item._id}. {item.title}
            </li>
          ))}
      </ul>

      {postId && <BoardInfo postId={postId} />}
    </>
  );
}

export default BoardList;
