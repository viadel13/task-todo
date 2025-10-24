import { useState, useEffect } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
});

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("Erreur lors du chargement des todos:", error);
        setTodos([]);
      }
    }
  }, []);

  const saveTodosToStorage = (todosToSave) => {
    localStorage.setItem("todos", JSON.stringify(todosToSave));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    saveTodosToStorage(updatedTodos); // Sauvegarde immédiate
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToStorage(updatedTodos); // Sauvegarde immédiate
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
    saveTodosToStorage(updatedTodos); // Sauvegarde immédiate
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo,
    );
    setTodos(updatedTodos);
    saveTodosToStorage(updatedTodos); // Sauvegarde immédiate
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "#f8f7ff",
        }}
      >
        <Navbar
          activeTodosCount={activeTodosCount}
          completedTodosCount={completedTodosCount}
        />

        <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
          <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
            {/* Header Section */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #15156d 0%, #9c27b0 100%)",
                color: "white",
                p: 4,
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: 20, sm: 25, md: 30 } }}
              >
                Manage your tasks efficiently
              </Typography>
              <Typography
                variant="body1"
                sx={{ opacity: 0.9, fontSize: { xs: 15, sm: 15, md: 25 } }}
              >
                Organise your day and achieve your goals
              </Typography>
            </Box>

            <TodoForm onAddTodo={addTodo} />

            <TodoFilters
              filter={filter}
              onFilterChange={setFilter}
              counts={{
                all: todos.length,
                active: activeTodosCount,
                completed: completedTodosCount,
              }}
            />

            <TodoList
              todos={todos}
              filter={filter}
              onToggle={toggleComplete}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          </Paper>
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
