import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
// const todos = [
//   {
//     id: 1,
//     description: "Practice Context API",
//     checked: false,
//     createdAt: new Date().toDateString(),
//   },
//   {
//     id: 2,
//     description: "Practice State Management",
//     checked: true,
//     createdAt: new Date().toDateString(),
//   },
//   {
//     id: 3,
//     description: "Learn TypeScript",
//     checked: false,
//     createdAt: new Date().toDateString(),
//   },
// ];

const initialState = {
  todos: [],
  selectedTodo: null,
  isModalOpen: false,
  selectedSort: "",
  text: "",
  editedText: "",
  showTextModal: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "get/todos":
      return {
        ...state,
        todos: action.payload,
      };
    case "add/todo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        text: "",
      };

    case "delete/todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => action.payload !== todo.id),
      };
    case "complated/delete/todo":
      return { ...state, todos: state.todos.filter((todo) => !todo.checked) };
    case "checked/todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.payload === todo.id
            ? { ...todo, checked: !todo.checked }
            : todo
        ),
      };

    case "edit/todo":
      return {
        ...state,
        isModalOpen: false,
        todos: state.todos.map((item) =>
          state.selectedTodo.id === item?.id
            ? { ...item, description: state.editedText }
            : item
        ),
      };

    case "edit/modal/todo":
      return {
        ...state,
        selectedTodo: state.todos.find((todo) => action.payload === todo.id),
        isModalOpen: true,
      };

    case "sort/todo":
      if (state.selectedSort === "date")
        return {
          ...state,
          todos: state.todos
            .slice()
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
          selectedSort: action.payload,
        };

      if (state.selectedSort === "description")
        return {
          ...state,
          todos: state.todos
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description)),
          selectedSort: action.payload,
        };

      if (state.selectedSort === "checked")
        return {
          ...state,
          todos: state.todos
            .slice()
            .sort((a, b) => Number(a.checked) - Number(b.checked)),
          selectedSort: action.payload,
        };
      return { ...state, todos: state.todos, selectedSort: action.payload };

    case "text/value":
      return { ...state, text: action.payload };

    case "editedtext/value":
      return { ...state, editedText: action.payload };
    case "close/modal":
      return {
        ...state,
        isModalOpen: false,
        showTextModal: false,
      };
    case "show/text/modal":
      return {
        ...state,
        showTextModal: true,
        selectedTodo: state.todos.find((todo) => action.payload === todo.id),
      };
    default:
      return state;
  }
}

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [
    {
      todos,
      selectedTodo,
      isModalOpen,
      selectedSort,
      text,
      editedText,
      showTextModal,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(function () {
    const storedData = JSON.parse(localStorage.getItem("todos"));
    // if (!storedData) return;
    if (storedData) return dispatch({ type: "get/todos", payload: storedData });
  }, []);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  useEffect(
    function () {
      handleSortTodos(selectedSort);
    },
    [selectedSort]
  );

  useEffect(
    function () {
      text.length > 0 && setError(false);
    },
    [text.length]
  );

  function handleSortTodos(selected) {
    dispatch({ type: "sort/todo", payload: selected });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.length < 1) {
      setError(true);
      return toast.error("Can't add empty to do");
    }

    const newItem = {
      id: Math.random().toString(36).substr(2, 10),
      description: text,
      checked: false,
      createdAt: new Date().toDateString(),
    };

    dispatch({ type: "add/todo", payload: newItem });
    toast.success("Successfully added");
  }

  function handleEdit() {
    console.log(editedText);
    if (editedText.length < 1) return toast.error("Can't add empty to do");
    dispatch({ type: "edit/todo" });
    toast.success("Successfully edited");
  }
  function handleCloseModal() {
    dispatch({ type: "close/modal" });
  }
  function handleDelete(id) {
    dispatch({ type: "delete/todo", payload: id });
    toast.success("Successfully deleted");
  }
  function handleComplatedDelete() {
    dispatch({ type: "complated/delete/todo" });
    toast.success("Successfully deleted complated todos");
  }
  function handleCheckedTodo(id) {
    dispatch({ type: "checked/todo", payload: id });
    toast.success("State is changed");
  }
  function handleShowTextModal(id) {
    dispatch({ type: "show/text/modal", payload: id });
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodo,
        isModalOpen,
        selectedSort,
        text,
        editedText,
        dispatch,
        handleSubmit,
        handleEdit,
        handleDelete,
        handleCloseModal,
        handleCheckedTodo,
        handleComplatedDelete,
        handleSortTodos,
        handleShowTextModal,
        showTextModal,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
//! Oluşturduğum contexti(yani TodoContext) custom hook içerisinde kullanmamı sağlıyor
function useList() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("useTodoList must be used within a TodoProvider");
  return context;
}

export { useList, TodoProvider };
