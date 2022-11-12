import PropTypes from "prop-types";
import {useMemo, useState } from "react";
import context from "./Context";

function Provider({ children }) {
  const [searchApi, setSearchApi] = useState([]);


  const contextValue = useMemo(
    () => ({
      searchApi,
      setSearchApi,
    }),
    [searchApi, setSearchApi]
  );
  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
