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
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Checkbox from "@mui/material/Checkbox";
import toast, { Toaster } from "react-hot-toast";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function App() {
  const [todos, setTodos] = useState([]);
  //edit btn - modal
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSort, setSelectedSort] = React.useState("");

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

  function handleEdit(id) {
    const selectedTodo = todos.find((todo) => id === todo.id);
    setSelectedTodo(selectedTodo);
    setIsModalOpen(true);
  }
  return (
    <div className="app">
      <Toaster position="top-right" />
      <ToDoList
        todos={todos}
        onDelete={handleDelete}
        onCheck={handleChecked}
        onEdit={handleEdit}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
      <ListAdd setTodos={setTodos} />

      {selectedTodo && (
        <BasicModal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTodo(null);
          }}
          todo={selectedTodo}
          setTodos={setTodos}
        />
      )}
    </div>
  );
}

function ToDoList({
  todos,
  onDelete,
  onCheck,
  onEdit,
  selectedSort,
  setSelectedSort,
}) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "70%",
        height: "70dvh",
        marginBottom: "1.5rem",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "70dvh",
          overflowY: "scroll",
          justifyContent: "center",
          display: "inline-block",

          margin: "1rem",
        }}
        elevation={6}
      >
        {!todos.length ? (
          <CheckTodos />
        ) : (
          <List>
            <ListFolder
              // sortedItems={todos}
              todos={todos}
              onDelete={onDelete}
              onCheck={onCheck}
              onEdit={onEdit}
            />
          </List>
        )}
      </Paper>
      <BasicSelect
        todos={todos}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
    </Stack>
  );
}

function CheckTodos() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70dvh",
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
//sorted func
function BasicSelect({ todos, selectedSort, setSelectedSort }) {
  return (
    <Box sx={{ minWidth: 120, mt: "1rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSort}
          label="SORT"
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <MenuItem value="input">INPUT</MenuItem>
          <MenuItem value="date">DATE</MenuItem>
          <MenuItem value="description">DESCRIPTION</MenuItem>
          <MenuItem value="checked">CHECKED</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function ListFolder({ todos, onDelete, onCheck, onEdit, selectedSort }) {
  //sorted
  // let sortedItems;

  // if (selectedSort && "input") sortedItems = todos;
  // if (selectedSort && "date")
  //   sortedItems = todos.slice().sort((a, b) => a.date - b.date);
  // if (selectedSort && "description")
  //   sortedItems = todos
  //     .slice()
  //     .sort((a, b) => a.description.localeCompare(b.description));
  // if (selectedSort && "checked")
  //   sortedItems = todos.slice.sort(
  //     (a, b) => Number(a.checked) - Number(b.checked)
  //   );
  // return sortedItems.map((item) => (
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
            startIcon={<EditIcon />}
            onClick={() => onEdit(item.id)}
          >
            EDIT
          </Button>

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

function BasicModal({ open, onClose, todo, setTodos }) {
  const [editedText, setEditedText] = useState(todo.description);

  const handleSave = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        todo.id === item.id ? { ...item, description: editedText } : item
      )
    );
    onClose();
    toast.success("Successfully edited");
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #3887BE",
          boxShadow: 14,
          p: 4,
        }}
      >
        <Typography id="modal-modal-description" sx={{ m: 2 }}>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            label="Edit Todo"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Typography>
        <Button
          variant="outlined"
          onClick={handleSave}
          sx={{ ml: "1rem" }}
          startIcon={<SaveIcon />}
        >
          SAVE
        </Button>
      </Box>
    </Modal>
  );
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
