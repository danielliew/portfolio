import { useEffect, useState } from "react";

const bp = 769;

const useResponsive = () => {
  const [x, setX] = useState(window.innerWidth);

  const onResize = () => {
    setX(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return x > bp;
};

export default useResponsive;
