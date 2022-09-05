import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => { // scroll to TOP on rerender screen component ~~~~~~~~~~~
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); // on each time location is changed ~~~~~~~~~~

    return <>{children}</>
};

export default ScrollToTop;