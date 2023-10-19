import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Progression = (props: any) => {
  return (
    <>
      <CircularProgress color="primary" value={65} thickness={4} />
    </>
  );
};

export default Progression;
