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
import Typography from "@mui/material/Typography"; //for fontsize
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { TodoProvider, useList } from "./contexts/TodoContext";

export default function App() {
  // function handleChecked(id) {
  //   setTodos(
  //     todos.map((todo) =>
  //       id === todo.id ? { ...todo, checked: !todo.checked } : todo
  //     )
  //   );
  // }

  // function handleAllDelete() {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => !todo.checked));
  // }

  return (
    <TodoProvider>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Grid
          container
          className="app"
          sx={{
            width: {
              xs: "100%", // Ekran küçük olduğunda
              sm: "80%", // Küçük ekranlarda (small)
              md: "70%", // Orta ekranlarda (medium)
              lg: "50%", // Büyük ekranlarda (large)
            },
          }}
        >
          <Toaster
            position="top-right"
            toastOptions={{
              // Define default options
              duration: 5000,
            }}
          />
          <Grid xs={12}>
            <ToDoList className="toDoList" />
          </Grid>
          <Grid xs={12}>
            <ListAdd />
          </Grid>
          {/* <BasicModal /> */}
        </Grid>
      </Box>
    </TodoProvider>
  );
}

function ToDoList() {
  const { todos, isModalOpen } = useList();

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "70dvh",
        textAlign: "end",
      }}
    >
      <Paper
        className="scrol"
        sx={{
          width: "100%",
          justifyContent: "center",
          margin: "1rem",
          padding: "1rem",
        }}
        elevation={6}
      >
        <Stack
          sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
        >
          <Grid
            xs={window.innerWidth > 600 ? 12 : 6}
            md={window.innerWidth > 600 ? 12 : 4}
            sx={{ display: "inherit", justifyContent: "end" }}
          >
            <BasicSelect />
            <AllDeleteBtn />
            {isModalOpen && <BasicModal />}
          </Grid>
        </Stack>
        {!todos?.length ? (
          <CheckTodos />
        ) : (
          <List>
            <ListFolder />
          </List>
        )}
      </Paper>
    </Stack>
  );
}
function ListAdd() {
  const { handleSubmit, dispatch, text } = useList(); //context ten func çağırma

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
          width: "10ch",
          fontSize: window.innerWidth > 600 ? `${1.2}rem` : `${1}rem`,
        }}
      >
        <Icon>
          <span className="material-icons-outlined">add_circle</span>
        </Icon>
        Add
      </Button>

      <TextField
        value={text}
        onChange={(e) =>
          dispatch({ type: "text/value", payload: e.target.value })
        }
        id="standard-basic"
        label={
          <Typography
            sx={{
              fontSize: window.innerWidth > 600 ? `${1.2}rem` : `${1}rem`,
            }}
          >
            Things to do
          </Typography>
        }
        variant="outlined"
        sx={{
          width: window.innerWidth > 600 ? `${65}ch` : `${50}ch`,
        }}
        helperText={
          <Typography
            sx={{
              fontSize: window.innerWidth > 600 ? `${0.8}rem` : `${0.5}rem`,
            }}
          >
            Please enter some todos
          </Typography>
        }
        // error={Boolean(error)
        // }
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
function BasicSelect() {
  const { dispatch, handleSortTodos, selectedSort, todos } = useList();

  return (
    <Box
      sx={{
        minWidth: 125,
        m: "1rem 0.6rem 0 0",
        display: "inline-block",
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            textAlign: "center",
            display: "grid",
            alignItems: "center",
          }}
        >
          Sort by
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSort}
          label="SORTBY"
          sx={{ p: "0.06rem 1rem" }}
          size="small"
          disabled={todos?.length < 2}
          onChange={(e) => handleSortTodos(e.target.value)}
        >
          <MenuItem value="date">Sort by Date</MenuItem>
          <MenuItem value="description">Sort by Description</MenuItem>
          <MenuItem value="checked">Sort by Checked</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

//All Delete Btn
function AllDeleteBtn() {
  const { todos, handleAllDelete } = useList();
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: "inline-block", mt: "1rem" }}
    >
      <Button
        variant="outlined"
        href="#outlined-buttons"
        sx={{ p: "0.5rem 1rem" }}
        size="small"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleAllDelete}
        disabled={!todos?.length}
      >
        Clear Completed ones
      </Button>
    </Stack>
  );
}

function ListFolder({ onCheck }) {
  const { todos, dispatch, handleDelete } = useList();
  return todos.map((item) => (
    <>
      <ListItem className="listItem" key={Math.random().toString(36)}>
        <ControlledCheckbox id={item.id} checked={item.checked} />
        <ListItemText primary={item.description} secondary={item.createdAt}>
          {item.description}
        </ListItemText>
        <Stack
          sx={{
            gap: "0.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{ p: "0.5rem 1rem" }}
            size="small"
            onClick={() =>
              dispatch({ type: "edit/modal/todo", payload: item.id })
            }
          >
            {window.innerWidth > 600 && "EDIT"}
          </Button>

          <Button
            variant="outlined"
            color="error"
            sx={{ p: "0.5rem 1rem" }}
            size="small"
            onClick={() => handleDelete(item.id)}
            startIcon={<DeleteIcon />}
          >
            {window.innerWidth > 600 && "DELETE"}
          </Button>
        </Stack>
      </ListItem>
      <Divider />
    </>
  ));
}

function BasicModal() {
  const { isModalOpen, dispatch, handleEdit, handleCloseModal, editedText } =
    useList();

  return (
    <Modal
      open={isModalOpen}
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
            label="Edit Todo"
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(e) =>
              dispatch({ type: "editedtext/value", payload: e.target.value })
            }
          />
        </Typography>
        <Button
          variant="contained"
          sx={{ p: "0.5rem 1rem", ml: "1rem" }}
          size="small"
          startIcon={<SaveIcon />}
          onClick={handleEdit}
          // color="success"
        >
          SAVE
        </Button>
        <Button
          variant="outlined"
          sx={{ p: "0.5rem 1rem", ml: "1rem" }}
          size="small"
          // startIcon={<ArrowBackSharpIcon />}
          onClick={handleCloseModal}
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

function ControlledCheckbox({ id, checked }) {
  const { handleCheckedTodo } = useList();
  return (
    <Checkbox
      checked={checked}
      onChange={() => handleCheckedTodo(id)}
      type="checkbox"
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
