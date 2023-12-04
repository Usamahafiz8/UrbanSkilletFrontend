import { useState, useEffect } from "react";

const useIsMobile800 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Adjust the breakpoint as needed
    };

    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 800); // Adjust the breakpoint as needed
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Remove event listener on component unmount
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return isMobile;
};

export default useIsMobile800;
