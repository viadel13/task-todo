import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Navbar({ activeTodosCount, completedTodosCount }) {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#15156d",
        p: 2,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
          }}
        >
          <CheckCircleIcon sx={{ mr: 2, fontSize: 32 }} />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            TaskMaster Dev
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Chip
            label={`${activeTodosCount} in progress`}
            color="warning"
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          />
          <Chip
            label={`${completedTodosCount} completed`}
            color="success"
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
