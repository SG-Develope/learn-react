import { createPost } from "@/action/post";
import { Metadata } from "next";
import RegistForm from "./RegistForm";

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.',
}

export default function PostNew() {
  
  return (
    <RegistForm/>
  );
}