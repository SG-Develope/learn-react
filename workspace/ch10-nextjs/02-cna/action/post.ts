
// 게시물 등록
export async function createPost(formData: FormData) {
  // console.log("요청정보", request);

  const title = formData.get("title");
  const content = formData.get("content");

  console.log(title, content);

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Client-Id": "openmarket",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();

  return data.item;
}
