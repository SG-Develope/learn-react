import type { BoardReplyCreateRes } from "@/types/board";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";



function CommentNew({postId} : {postId : number}) {

const axiosInstance = getAxiosInstance();
 const queryClient = useQueryClient();

  const { mutate: requestAddComment, isPending } = useMutation({
    mutationFn: (formData:FormData) => axiosInstance.post<BoardReplyCreateRes>(`/posts/${postId}/replies`, formData),
    onSuccess: () => {
     queryClient.invalidateQueries({queryKey: ['posts', `${postId}`, 'replies']});
    }

  });
  
  // 등록 버튼 누르면 댓글 등록 요청
  const handleAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // submit 기본 동작 취소
    const formElem = event.currentTarget;
    const formData = new FormData(formElem);
    requestAddComment(formData, {onSuccess: () => {
      formElem.reset();

    }});
  }

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea rows={3} cols={30} placeholder="댓글 내용" name="content"></textarea><br />
        <button type="submit" disabled={isPending}>등록</button>
      </form>
    </>
  );
}

export default CommentNew;