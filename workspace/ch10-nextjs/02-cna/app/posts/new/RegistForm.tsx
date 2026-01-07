'use client'

import { createPost } from "@/action/post";

export default function RegistForm() {
  return (
<>
      <h1>게시글 등록</h1>
      <form action={createPost}>
        <label htmlFor="title">제목</label>
        <input className="border-2" type="text" id="title" name="title" />

        <label htmlFor="content">내용</label>
        <input className="border-2" type="text" id="content" name="content" />
        <button className="border-2 bg-red-500" type="submit">전송한다?</button>
      </form>
    </>
  );
}