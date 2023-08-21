import { useEffect, useRef } from "react";

import { Box, Button, Typography } from "@mui/material";

export const ContentModalDelete = ({ onDelete, onClose, title }) => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.focus({ focusVisible: true });
  }, []);

  return (
    <>
      <Typography variant="h6" component="p" align="center" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button variant="contained" size="small" onClick={() => onDelete()}>
          Так
        </Button>
        <Button
          ref={btnRef}
          variant="contained"
          size="small"
          onClick={() => onClose()}
        >
          Hi
        </Button>
      </Box>
    </>
  );
};
