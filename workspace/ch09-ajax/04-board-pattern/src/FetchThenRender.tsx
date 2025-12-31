import type {
  BoardInfo,
  BoardInfoRes,
  BoardReply,
  BoardReplyListRes,
} from "@/types/board";
import axios from "axios";
import { useEffect, useState } from "react";

// 게시글 상세 조회 API 호출
function fetchPost() {
  return axios
    .get<BoardInfoRes>("https://fesp-api.koyeb.app/market/posts/10", {
      headers: {
        "Client-Id": "openmarket",
      },
    })
    .then((response) => response.data.item);
}
// 댓글 목록 조회 API 호출
function fetchComments() {
  return axios
    .get<BoardReplyListRes>(
      "https://fesp-api.koyeb.app/market/posts/10/replies",
      {
        headers: {
          "Client-Id": "openmarket",
        },
      }
    )
    .then((response) => response.data.item);
}

//게시글과 댓글 목록을 동시에 조회
function fetchData() {
  return Promise.all([fetchPost(), fetchComments()]).then(
    ([post, comments]) => {
      return { post, comments };
    }
  );
}

// 데이터 패칭 시작
// 모듈의 탑 레벨에 두면 import ㄷ외는 순간에 실행되게 하기 위함
const fetchResult = fetchData();

// 게시글 상세 조회 화면
function FetchThenRender() {
  // TODO: 게시글 상세 조회

  return (
    <>
      <h4>1번 게시물 제목</h4>
      <Comments />
    </>
  );
}

// 댓글 목록을 조회해서 출력하는 컴포넌트
export function Comments() {
  // TODO: 댓글 목록 조회

  return (
    <>
      <ul>
        <li>댓글 1</li>
        <li>댓글 2</li>
        <li>댓글 3</li>
      </ul>
    </>
  );
}

export default FetchThenRender;
