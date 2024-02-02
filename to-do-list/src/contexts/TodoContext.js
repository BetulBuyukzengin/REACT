import { createContext, useContext, useReducer } from "react";
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
  selectedSort: "input",
  text: "",
  error: false,
  editedText: "",
};
function reducer(state, action) {
  switch (action.type) {
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
      let sortedItems;

      if (state.selectedSort === "input") sortedItems = state.todos;
      if (state.selectedSort === "date")
        sortedItems = state.todos
          .slice()
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      if (state.selectedSort === "description")
        sortedItems = state.todos
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description));
      if (state.selectedSort === "checked")
        sortedItems = state.todos
          .slice()
          .sort((a, b) => Number(a.checked) - Number(b.checked));
      console.log(sortedItems);
      console.log(state.selectedSort);
      return { ...state, todos: sortedItems, selectedSort: action.payload };
    // case "sort/value":
    //   return { ...state, selectedSort: action.payload };
    case "text/value":
      return { ...state, text: action.payload, editedText: action.payload };
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

  function handleSubmit(e) {
    e.preventDefault();
    if (text.length < 2) return toast.error("boş ekleme");

    const newItem = {
      id: Math.random().toString(36).substr(2, 10),
      description: text,
      checked: false,
      createdAt: new Date().toDateString(),
    };
    console.log(newItem.id);
    dispatch({ type: "add/todo", payload: newItem });
    toast.success("başarılı");
  }
  function handleEdit() {
    dispatch({ type: "edit/todo" });
    toast.success("başarılı");
  }
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
