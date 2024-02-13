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
import { Toaster } from "react-hot-toast";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { TodoProvider, useList } from "./contexts/TodoContext";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function App() {
  return (
    <TodoProvider>
      <Box
        sx={{
          display: "grid",
          placeItems: window.innerWidth > 600 && "center",
          placeContent: window.innerWidth < 600 && "center",
          height: "100vh",
        }}
        fullWidth
      >
        <Grid
          container
          className="app"
          sx={{
            placeContent: "center",
            width: {
              xs: "100%",
              sm: "100%",
              md: "70%",
              lg: "50%",
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
          <Grid
            xs={window.innerWidth > 600 ? 12 : 6}
            sx={{ marginTop: window.innerWidth < 600 && `${3}rem` }}
          >
            <ListAdd />
          </Grid>
        </Grid>
      </Box>
    </TodoProvider>
  );
}

function ToDoList() {
  const { todos, isModalOpen, showTextModal } = useList();

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
          {window.innerWidth > 600 && (
            <p
              style={{
                width: "18%",
                color: "#1A77D2",
                fontWeight: "bolder",
                letterSpacing: "3px",
                fontSize: "20px",
                fontFamily: "Protest Strike, sans-serif",
              }}
            >
              TODO
              <span
                style={{
                  color: "#D32F2F",
                  fontSize: "23px",
                }}
              >
                LIST
              </span>
            </p>
          )}

          <Grid
            xs={window.innerWidth > 600 ? 12 : 6}
            md={window.innerWidth > 600 ? 12 : 4}
            sx={{ display: "inherit", justifyContent: "end" }}
          >
            <BasicSelect />
            <ComplatedDeleteBtn />
            {isModalOpen && <EditModal />}
            {showTextModal && <ShowTextModal />}
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
  const { handleSubmit, dispatch, text, error } = useList(); //context communication

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
        error={error}
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
          width: window.innerWidth > 600 ? `${65}ch` : `${40}ch`,
        }}
        helperText={
          <Typography
            sx={{
              fontSize: window.innerWidth > 600 ? `${0.8}rem` : `${0.7}rem`,
            }}
          >
            Please enter some todos
          </Typography>
        }
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
function BasicSelect() {
  const { handleSortTodos, selectedSort, todos } = useList();

  return (
    <Box
      sx={{
        minWidth: 125,
        m: "1rem 0.6rem 0 0.6rem",
        display: "inline-block",
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          size="small"
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
function ComplatedDeleteBtn() {
  const { todos, handleComplatedDelete } = useList();
  // const isAnyChecked = todos.filter((todo) => todo.checked);
  const isAnyChecked = todos.find((todo) => todo.checked);

  console.log(isAnyChecked);
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
        onClick={handleComplatedDelete}
        disabled={!todos?.length || !isAnyChecked}
      >
        {window.innerWidth > 600 ? "  Clear Completed" : "Completed"}
      </Button>
    </Stack>
  );
}

function ListFolder({ onCheck }) {
  const { todos, dispatch, handleDelete, handleShowTextModal } = useList();

  return todos.map((item) => (
    <>
      <ListItem
        sx={{
          paddingLeft: window.innerWidth < 600 && 0,
          paddingRight: window.innerWidth < 600 && 0,
        }}
        className="listItem"
        key={Math.random().toString(36)}
      >
        <ControlledCheckbox id={item.id} checked={item.checked} />
        <ListItemText
          className={item.checked ? "disabled" : ""}
          primary={
            item.description.length > 20
              ? item.description.slice(0, 20) + "..."
              : item.description
          }
          secondary={item.createdAt}
        ></ListItemText>

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
          {item.description.length > 20 && (
            <Button
              onClick={() => handleShowTextModal(item.id)}
              variant="outlined"
              color="secondary"
              sx={{
                p: window.innerWidth < 600 ? "0.5rem 0" : "0.5rem 1rem",
                minWidth: window.innerWidth < 600 ? "45px" : "64px",
              }}
              size="small"
            >
              <ReadMoreIcon />
            </Button>
          )}
          <Button
            disabled={item.checked}
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
              p: window.innerWidth < 600 ? "0.5rem 0" : "0.5rem 1rem",
              minWidth: window.innerWidth < 600 ? "45px" : "64px",
            }}
            size="small"
            onClick={() =>
              dispatch({ type: "edit/modal/todo", payload: item.id })
            }
          >
            {window.innerWidth > 600 && "EDIT"}
          </Button>
          <Button
            disabled={item.checked}
            variant="outlined"
            color="error"
            sx={{
              p: window.innerWidth < 600 ? "0.5rem 0" : "0.5rem 1rem",
              minWidth: window.innerWidth < 600 ? "45px" : "64px",
            }}
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

function ShowTextModal() {
  const { showTextModal, handleCloseModal, selectedTodo } = useList();
  return (
    <Modal
      open={showTextModal}
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
          {selectedTodo?.description}
        </Typography>

        <Button
          variant="outlined"
          sx={{ p: "0.5rem 1rem", ml: "1rem" }}
          size="small"
          onClick={handleCloseModal}
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

function EditModal() {
  const { isModalOpen, dispatch, handleEdit, handleCloseModal, selectedTodo } =
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
            defaultValue={selectedTodo?.description}
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
