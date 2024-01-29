import React, { useEffect, useState } from "react";
import { Paper, Stack } from "@mui/material";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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

  //edit
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //sort
  const [selectedSort, setSelectedSort] = useState("input");

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
    setSelectedTodo(todos.find((todo) => id === todo.id));
    setIsModalOpen(true);
  }
  function handleAllDelete() {
    // Select and check
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.checked));
    // Select remove
    setSelectedTodo(null);
  }
  return (
    <div className="app">
      <Toaster position="top-right" />
      <ToDoList
        todos={todos}
        onDelete={handleDelete}
        allOnDelete={handleAllDelete}
        onCheck={handleChecked}
        onEdit={handleEdit}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedTodo={selectedTodo}
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
  allOnDelete,
}) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "70%",
        height: "70dvh",
        // marginBottom: "1.5rem",
        textAlign: "end",
      }}
    >
      <Paper
        className="scrol"
        sx={{
          width: "100%",
          // height: "70dvh",
          justifyContent: "center",
          margin: "1rem",
        }}
        elevation={6}
      >
        <Stack
          sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
        >
          <BasicSelect
            // sx={{ position: "fixed" }}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
          <AllDeleteBtn allOnDelete={allOnDelete} />
        </Stack>
        {!todos.length ? (
          <CheckTodos />
        ) : (
          <List>
            <ListFolder
              selectedSort={selectedSort}
              // setSelectedSort={setSelectedSort}
              todos={todos}
              onDelete={onDelete}
              onCheck={onCheck}
              onEdit={onEdit}
            />
          </List>
        )}
      </Paper>
    </Stack>
  );
}
function ListAdd({ setTodos }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false); //no errors at startup

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
      if (text.length > 1) setError(false); //remove error
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

function CheckTodos() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40dvh",
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
function BasicSelect({ selectedSort, setSelectedSort }) {
  return (
    <Box
      sx={{
        minWidth: 125,
        m: "1rem 1rem 0 0",
        display: "inline-block",
      }}
    >
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

//All Delete Btn
function AllDeleteBtn({ allOnDelete }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: "inline-block", mt: "1rem" }}
    >
      <Button
        variant="outlined"
        href="#outlined-buttons"
        sx={{ p: "0.9rem 2rem" }}
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => allOnDelete()}
      >
        ALL DELETE
      </Button>
    </Stack>
  );
}

function ListFolder({ todos, onDelete, onCheck, onEdit, selectedSort }) {
  let sortedItems;

  if (selectedSort === "input") sortedItems = todos;
  if (selectedSort === "date")
    sortedItems = todos.slice().sort((a, b) => a.date - b.date);
  if (selectedSort === "description")
    sortedItems = todos
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (selectedSort === "checked")
    sortedItems = todos
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  return sortedItems.map((item) => (
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
    // if (e.key === "Enter") console.log("Enter tuşuna basıldı");
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
          boxShadow: 14,
          borderRadius: "10px",
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
          // type="submit"
          variant="outlined"
          onClick={handleSave}
          // onKeyDown={(e) => {
          //   if (e.key === "enter") console.log("hey");
          // }}
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
