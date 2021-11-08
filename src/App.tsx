import React, { lazy, Suspense } from "react";
import PageLoader from "./components/PageLoader";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div>
        <Navbar />
        <Home />
      </div>
    </Suspense>
  );
};

export default App;
