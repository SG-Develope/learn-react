import { Metadata } from "next";

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.',
}

export default function PostNew(){
  return (
    <>
      <h1>게시글 등록</h1>
      {/* TODO 1. title, content 입력 필드와 등록 기능의 submit 버튼 추가 */}
      
      <form>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="content">내용</label>
        <input type="text" id="content" name="content" />
        <button type="submit">등록</button>
      </form>
    </>
  );
}