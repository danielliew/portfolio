import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cursor from "./components/Cursor";
import PageLoader from "./components/PageLoader";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/wtf"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<PageLoader />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/blogs/:blog_id"
          element={
            <Suspense fallback={<PageLoader />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Navigate to="/wtf" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
