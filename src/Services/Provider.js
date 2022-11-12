import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import context from "./Context";

function Provider({ children }) {
  const [location, setLocation] = useState([]);

  const contextValue = useMemo(
    () => ({
      location,
      setLocation,
    }),
    [location, setLocation]
  );
  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
