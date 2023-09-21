import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f5f6fa] w-full h-auto">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2} // Reduced the gap
        padding={2} // Reduced the padding
        sx={{ borderTop: "1px solid #ccc" }} // Added top border
      >
        <Typography sx={{ cursor: "pointer" }} variant="body2" color="blue">
          Visit Website
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        padding={3}
        sx={{ borderTop: "1px solid #ccc" }} // Added top border
      >
        <Typography variant="h5" color={"#5c6575"}>
          Powered By VB
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;