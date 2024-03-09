import { Header } from "./components/Header";
import { RegisterModal } from "./components/RegisterModal";
import { LoginModal } from "./components/LoginModal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ArticlePage } from "./pages/ArticlePage";
import { MainLayout } from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "article/:articleId",
        element: <ArticlePage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <RegisterModal />
      <LoginModal />
    </>
  );
}

export default App;
