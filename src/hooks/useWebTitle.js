import { useEffect } from "react";

const useWebTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} - IINFINES` : "IINFINES";
  }, [title]);
};

export default useWebTitle;
