//GET http://localhost:3000/api/posts
export async function GET(request: Request) {
  console.log("요청정보", request);

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    headers: {
      'Client-Id' : 'openmarket'
    }
  });
  const data = await res.json();

  return Response.json(data);
}
