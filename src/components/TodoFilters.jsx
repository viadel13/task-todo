import { Tabs, Tab, Box } from "@mui/material";

export default function TodoFilters({ filter, onFilterChange, counts }) {
  const handleChange = (event, newValue) => {
    onFilterChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "grey.50" }}>
      <Tabs
        value={filter}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tab
          label={`all (${counts.all})`}
          value="all"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "0.9rem" } }}
        />
        <Tab
          label={`active (${counts.active})`}
          value="active"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "0.9rem" } }}
        />
        <Tab
          label={`completed (${counts.completed})`}
          value="completed"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "0.9rem" } }}
        />
      </Tabs>
    </Box>
  );
}
