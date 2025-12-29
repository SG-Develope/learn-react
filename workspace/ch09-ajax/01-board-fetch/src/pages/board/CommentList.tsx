import type { Reply } from "@/types/board";

function CommentList({replies} : {replies:Reply[]}) {
  return (
    <>
        {replies?.map((item: Reply) => (
          <li key={item._id}>{item.content}</li>
        ))}
    </>
  );
}

export default CommentList;