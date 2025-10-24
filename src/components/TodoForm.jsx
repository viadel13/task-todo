import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "stretch" },
        }}
      >
        <TextField
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          variant="outlined"
          size="medium"
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ px: 3, whiteSpace: "nowrap", backgroundColor: "#15156d" }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}
