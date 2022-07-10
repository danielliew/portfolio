import { useContext, useCallback } from "react";
import { CursorContext } from "../components/Cursor/CursorContext";

const useCursorHandlers = () => {
  const { setCursor } = useContext(CursorContext);

  const onMouseEnter = useCallback(() => {
    setCursor({ active: true });
  }, [setCursor]);

  const onMouseLeave = useCallback(() => {
    setCursor({ active: false });
  }, [setCursor]);
  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers