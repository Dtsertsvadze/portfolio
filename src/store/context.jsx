import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext({});

const Context = (props) => {
  const [offsetHeights, setOffsetHeights] = useState([]);

  const updateOffsetHeights = (heights) => {
    setOffsetHeights(heights);
  };

  useEffect(() => {
    const handleResize = () => {
      const newHeights = [];

      const components = document.getElementsByClassName("component");
      for (let i = 0; i < components.length; i++) {
        newHeights.push(components[i].offsetHeight);
      }

      updateOffsetHeights(newHeights);
    };

    // Call handleResize on initial load and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contextValue = {
    offsetHeights,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
