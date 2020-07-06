import React, { createContext, useState } from "react";

export const GridLayoutContext = createContext({
  gridLayout: "lists",
  hasSetGridLayout: false,
  setGridLayout: (list) => {},
  getGridLayout: () => {},
});

const GridLayoutProvider = ({ children }) => {
  const initialLayout = "grids";

  const [gridLayout, setGridLayout] = useState(initialLayout);
  const [hasSetGridLayout, setHasSetGridLayout] = useState(false);

  function setGridLayoutAndSave(list) {
    localStorage.setItem("gridLayout", list || initialLayout);
    setGridLayout(list);
  }

  function getGridLayoutAndSave() {
    setGridLayout(localStorage.getItem("gridLayout") || initialLayout);
    setHasSetGridLayout(true);
  }

  return (
    <GridLayoutContext.Provider
      value={{
        gridLayout,
        hasSetGridLayout,
        setGridLayout: setGridLayoutAndSave,
        getGridLayout: getGridLayoutAndSave,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};

export default GridLayoutProvider;