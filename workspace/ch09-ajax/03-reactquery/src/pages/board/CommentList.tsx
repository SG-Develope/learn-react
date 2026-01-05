import CommentNew from "@/pages/board/CommentNew";
import type { BoardInfoRes, BoardReply, BoardReplyListRes, ResData } from "@/types/board";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const axiosInstance = getAxiosInstance();

function CommentList({postId} : {postId : number}) {

  console.log("commenList id", postId);

  const {data, isLoading, error} = useQuery({
    queryKey: ['posts', postId, 'replies'],
    queryFn: () => axiosInstance.get<BoardReplyListRes>(`/posts/${postId}/replies`),
    select: (response) => response.data.item, 
    staleTime:1000*10,
    // refetchInterval: 3000,
  });
  const list = data?.map(reply => <li key={reply._id}>{reply.content}</li>);

  return (
    <>
      { isLoading && <><h3>로딩중...</h3><p>잠시만 기다려 주세요</p></> }
      { error && <><h3>에러 발생!!!</h3><p>{ error.message }</p></> }

      { data && <>
        <h3>댓글 목록</h3>
        <ul>
          { list }
        </ul>
      </> }

      <CommentNew postId={postId}/>
    </>
  );
}

export default CommentList;