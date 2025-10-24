import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 3,
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
        width: "100%",
      }}
    >
      <>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            © 2025 TaskDev. All rights reserved.
          </Typography>
        </Box>
      </>
    </Box>
  );
}
