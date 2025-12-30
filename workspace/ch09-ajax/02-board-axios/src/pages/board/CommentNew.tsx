import type { BoardReplyCreateRes, ResData } from "@/types/board";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { useState } from "react";

function CommentNew({ reload }: { reload: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const requestAddComment = async (formData: FormData) => {
    // TODO 4: API 서버에 댓글 등록을 axios 라이브러리로 요청을 보낸다.
    // API 참고: https://fesp-api.koyeb.app/market/apidocs/#/게시판/post_posts___id__replies
    // client-id: 'openmarket'
    try {
      setIsLoading(true);
      // FormData를 일반 Object로 변환
      const axios = getAxiosInstance();
      const response = axios.post("/posts/1/replies", formData);

      console.log("등록 성공");
      reload();
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    } finally {
      // try, catch 블럭이 실행된 후 호출
      setIsLoading(false);
    }
  };

  // 등록 버튼 누르면 댓글 등록 요청
  const handleAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // submit 기본 동작 취소
    const formElem = event.currentTarget;
    const formData = new FormData(formElem);
    const result = await requestAddComment(formData);
    if (result) {
      // 등록에 성공했을 경우
      formElem.reset();
    }
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea
          rows={3}
          cols={30}
          placeholder="댓글 내용"
          name="content"
        ></textarea>
        <br />
        <button type="submit" disabled={isLoading}>
          등록
        </button>
        {error && <span>{error.message}</span>}
      </form>
    </>
  );
}

export default CommentNew;
