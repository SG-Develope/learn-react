import type { Todo } from "@/types/todo";
import { Link, useFetcher } from "react-router";

interface TodoListItemProps {
  item: Todo;
}

const categoryList: Record<string, string> = {
  study: "공부",
  test: "테스트",
};


function TodoListItem({ item }: TodoListItemProps) {
  // 페이지 이동 없이 action이나 loader를 직접 호출
  const fetcher = useFetcher();

    const isLoading = fetcher.state === "loading";
    const isSubmmint = fetcher.state === "submitting";
    const isprocessing = isSubmmint || isLoading;

  const handleDelete = () => {
    // fetcher.submit(formData, options)
    fetcher.submit(null, {
      method: 'delete',
      action: `/todo/list/${item._id}`, // 호출할 action을 등록한 path를 지정
    }); // action을 직접 호출
  };




  return (
    <li>
      <span>{item._id}</span>
      <Link to={`/todo/list/${item._id}`}>
        {item.title ?? ""}, {categoryList[item.category] ?? ""},{" "}
        {item.important ?? ""},{item.finishAt ?? ""}
      </Link>
      <button type="button" onClick={handleDelete} disabled={isprocessing}>
        {isprocessing ? "삭제중..." : "삭제"}
      </button>
    </li>
  );
}

export default TodoListItem;