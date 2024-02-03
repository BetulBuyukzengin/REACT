import { createContext, useContext, useReducer, useEffect } from "react";
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
  error: false,
  editedText: "",
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
    case "all/delete/todo":
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

    // save
    case "edit/todo":
      return {
        ...state,
        isModalOpen: false,
        todos: state.todos.map((item) =>
          state.selectedTodo.id === item.id
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
      };
    default:
      return state;
  }
}

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [
    { todos, selectedTodo, isModalOpen, selectedSort, text, error, editedText },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    const storedData = JSON.parse(localStorage.getItem("todos"));
    if (!storedData) return;
    return dispatch({ type: "get/todos", payload: storedData });
  }, []);

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

  function handleSortTodos(selected) {
    dispatch({ type: "sort/todo", payload: selected });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (text.length < 1) return toast.error("Can't add empty to do");

    const newItem = {
      id: Math.random().toString(36).substr(2, 10),
      description: text,
      checked: false,
      createdAt: new Date().toDateString(),
    };
    console.log(newItem.id);
    dispatch({ type: "add/todo", payload: newItem });
    toast.success("Successfully added");
  }
  // console.log(editedText);
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
  function handleAllDelete() {
    dispatch({ type: "all/delete/todo" });
    toast.success("Successfully deleted complated to do's");
  }
  function handleCheckedTodo(id) {
    dispatch({ type: "checked/todo", payload: id });
    toast.success("State is changed");
  }
  // console.log(selectedSort);
  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodo,
        isModalOpen,
        selectedSort,
        text,
        error,
        editedText,
        dispatch,
        handleSubmit,
        handleEdit,
        handleDelete,
        handleCloseModal,
        handleCheckedTodo,
        handleAllDelete,
        handleSortTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
//Oluşturduğum contexti(yani TodoContext) custom hook içerisinde kullanmamı sağlıyor
function useList() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("useTodoList must be used within a TodoProvider");
  return context;
}

export { useList, TodoProvider };
