function CommentNew({ refreshReplies }: { refreshReplies : () => void}) {
  async function handlesubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get("content");

    console.log(content);

    if (content) {
      try {
        const response = await fetch(
          "https://fesp-api.koyeb.app/market/posts/1/replies",
          {
            headers: {
              "client-id": "openmarket",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              content,
            }),
          }
        );

        alert(`전송 성공!!~~`);
        console.log(response);
        refreshReplies();
      } catch (err) {
        alert(`에러발생 : ${err}`);
      }
    }
  }

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handlesubmit}>
        <textarea
          rows={3}
          cols={30}
          name="content"
          placeholder="댓글 내용"
        ></textarea>
        <br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;
