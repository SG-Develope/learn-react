import { createBrowserRouter, Navigate } from "react-router";
import { lazy, Suspense } from "react";

//정적 import (벜ㅌㄴ들링 할 떄 컴포넌트를 하나의 파일에 포함시킴)
import Layout from "@components/Layout";


//동적 import
const Home = lazy(() => import("@pages/Home"))
const Page1 = lazy(() => import("@pages/Page1"));
const Page2 = lazy(() => import("@pages/Page2"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Suspense key="home" fallback={<div>Home 로딩중...</div>}><Home /></Suspense>},
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/page1", element: <Page1 /> },
      { path: "/page2", element: <Page2 /> },
    ],
  },
]);

export default router;