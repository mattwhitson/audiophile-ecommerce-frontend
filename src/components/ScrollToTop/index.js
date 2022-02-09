import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Function that scrolls back to top of page during page transition
const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);
