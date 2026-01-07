import { ErrorRes, PostListRes } from "@/types";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "목록 조회",
  description: "게시판 목록 조회 페이지입니다.",
};

export default async function PostList() {

  // 3초 후에 resolve 됨
  // await new Promise(resolve => setTimeout(resolve, 1000*3));
  
  const res = await fetch("http://localhost:3000/api/posts");

  
  
  const data: PostListRes | ErrorRes = await res.json();
  console.log("게시물 목록조회", data);

  if (data.ok===0) {
    return '로딩중';
  }
  
  const list = data.item.map((item: { _id: number; title: string }) => {
    return (
      <li key={item._id}>
        <Link href={`/posts/${item._id}`}>
                  {item._id} - {item.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <h1>목록 조회</h1>
      <ul>{list}</ul>
    </>
  );
}
