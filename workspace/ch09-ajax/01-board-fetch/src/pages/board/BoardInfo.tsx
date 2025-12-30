import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import type { Board } from "@/types/board";
import CommentNew from "./CommentNew";

function BoardInfo() {
  // TODO 4: data, error, isLoading 상태 관리

  const [board, setBoard] = useState<Board>({
    title: "",
    content: "",
    replies: [],
  });


  const [newRepliesState, setNewRepliesState] = useState(true);

  const refreshReplies = () => {
    setNewRepliesState((prev) => !prev); // true → false → true 반복
  };


  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState<Error | null>(null); // 에러 상태

  const requestInfo = async () => {
    // TODO 3: API 서버에 1번 게시물의 상세정보를 fetch() 요청으로 보낸다.

    try {
      const response = await fetch(
        "https://fesp-api.koyeb.app/market/posts/124234",
        {
          headers: { "client-id": "openmarket" },
        }
      );
      const result = await response.json();
      console.log(result);
      setBoard(result.item); // API에서 item 안에 title, content 있음
      
    } catch (err) {
      console.log("들어옴")
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestInfo();
  }, [newRepliesState]); // 마운트 후에 한번만 setup 함수가 호출됨

  return (
    <>
      {isLoading ? (
        <p>로딩중...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          <h1>01 Fetch API</h1>
          <h2>{board.title}</h2>
          <p>{board.content}</p>

          <h3>댓글 목록</h3>
          <ul>
            <CommentList replies={board.replies} />
          </ul>

          <CommentNew refreshReplies={refreshReplies} />
        </>
      )}

      {/* TODO 5: 로딩중, 에러, 데이터가 있을 때 화면에 표시
        로딩중에는 <p>로딩중...</p> 표시
        에러가 발생하면 <p>{ error.message }</p>
        데이터가 있으면 <h2>{ data.title }</h2><p>{ data.content }</p>
      */}
    </>
  );
}

export default BoardInfo;
