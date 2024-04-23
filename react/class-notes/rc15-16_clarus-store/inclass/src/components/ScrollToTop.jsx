import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollTopIcon from "../assets/scrollup.png";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  return pathname.includes("products") ? (
    <img
      className="fixed bottom-2 right-2 cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
      src={scrollTopIcon}
      width={40}
      alt="scrollup"
    />
  ) : null;
}
