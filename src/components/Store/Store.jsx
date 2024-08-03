import React, { useCallback, useState } from "react";

import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import products from "../products";

function Store() {
  const [icon, setIcon] = useState("view_list");
  const [viewMode, setViewMode] = useState("list");

  const onSwitch = useCallback(() => {
    setIcon((prevIcon) =>
      prevIcon === "view_list" ? "view_module" : "view_list"
    );
    setViewMode((prevViewMode) =>
      prevViewMode === "list" ? "module" : "list"
    );
  }, []);

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      <CardsView cards={products} viewMode={viewMode} />
    </>
  );
}

export default Store;
