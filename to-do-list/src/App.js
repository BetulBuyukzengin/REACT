import React, { useEffect, useRef, useState } from "react";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Paper, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  function handleDelete(id) {
    setTodos(todos.filter((todo) => id !== todo.id));
    toast.success("Successfully deleted");
  }
  function handleChecked(id) {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  return (
    <div className="app">
      <Toaster position="top-right" />
      <ToDoList todos={todos} onDelete={handleDelete} onCheck={handleChecked} />
      <ListAdd setTodos={setTodos} />
    </div>
  );
}

function ToDoList({ todos, onDelete, onCheck }) {
  return (
    <Paper
      sx={{
        width: "60%",
        height: "60dvh",
        overflowY: "scroll",
        justifyContent: "center",
        display: "inline-block",
        marginBottom: "2rem",
      }}
      elevation={6}
    >
      {!todos.length ? (
        <CheckTodos />
      ) : (
        <List>
          <ListFolder todos={todos} onDelete={onDelete} onCheck={onCheck} />
        </List>
      )}
    </Paper>
  );
}

function CheckTodos() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50dvh",
      }}
    >
      <Paper
        sx={{
          textAlign: "center",
          padding: "1rem 2rem",
          backgroundColor: "#525CEB",
          color: "#EEF5FF",
          letterSpacing: "1px",
        }}
        elevation={4}
      >
        Let's start adding some todos
      </Paper>
    </Stack>
  );
}

function ListFolder({ todos, onDelete, onCheck }) {
  return todos.map((item) => (
    <>
      <ListItem
        className="listItem"
        key={Math.random().toString(36).substr(2, 10)}
      >
        <ControlledCheckbox
          checked={item.checked}
          id={item.id}
          onCheck={onCheck}
        />
        <ListItemText primary={item.description} secondary={item.createdAt}>
          {item.description}
        </ListItemText>
        <Stack sx={{ gap: "0.5rem", display: "flex", flexDirection: "row" }}>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => onDelete(item.id)}
          >
            DELETE
          </Button>
        </Stack>
      </ListItem>
      <Divider />
    </>
  ));
}
function ControlledCheckbox({ onCheck, id, checked }) {
  return (
    <Checkbox
      checked={checked}
      onChange={() => onCheck(id)}
      type="checkbox"
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

function ListAdd({ setTodos }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false); //hata yok

  function handleSubmit(e) {
    e.preventDefault();
    if (text.length < 1) {
      setError(true);
      return toast.error("Can't add empty todo");
    }

    const newItem = {
      id: Math.random().toString(36).substr(2, 10),
      description: text,
      checked: false,
      createdAt: new Date().toDateString(),
    };

    setTodos((item) => [...item, newItem]);
    setText("");
    toast.success("Successfully added");
  }

  useEffect(
    function () {
      if (text.length > 1) setError(false); //hatayı kaldırıyor
    },
    [text.length]
  );
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        type="submit"
        variant="outlined"
        size="small"
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignSelf: "center",
          gap: "0.3rem",
          width: "15ch",
        }}
      >
        <Icon>
          <span className="material-icons-outlined">add_circle</span>
        </Icon>
        Add
      </Button>

      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="standard-basic"
        label="Things to do"
        variant="outlined"
        sx={{ width: "50ch" }}
        helperText="Please enter some todos"
        error={Boolean(error)}
      />
    </Box>
  );
}
