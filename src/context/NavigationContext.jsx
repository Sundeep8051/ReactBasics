import {createContext, useEffect, useState} from "react";

const NavigationContext = createContext(undefined);

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []);

    function navigate(to) {
        window.history.pushState({}, "", to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

export {NavigationProvider};
export default NavigationContext;
