import { List, Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  filter,
  onToggle,
  onDelete,
  onEdit,
}) {
  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  const getEmptyMessage = () => {
    switch (filter) {
      case "active":
        return "All your tasks are completed !";
      case "completed":
        return "No tasks completed at the moment";
      default:
        return "Start by adding a new task";
    }
  };

  if (filteredTodos.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          px: 3,
        }}
      >
        <CalendarTodayIcon sx={{ fontSize: 64, color: "grey.300", mb: 2 }} />
        <Typography variant="h6" color="text.secondary" gutterBottom>
          No tasks to display
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {getEmptyMessage()}
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ maxHeight: 500, overflow: "auto" }}>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </List>
  );
}
