import { useState, useEffect, useRef } from "react";

export function useOutSideRef() {
  const ref = useRef(null);
  const [up, setup] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setup(false);
      } else {
        setup(true);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref, up };
}
