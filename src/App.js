// import logo from './logo.svg';
// import "module"
import "./App.css";
import { AppProvider } from "./TodolistContext/AppContext";
// import TodoTable from "./features/Todo/Pages";
import Todotable2 from "./TodolistContext/Pages/Todotable2";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Todotable2 />
      </AppProvider>
    </div>
  );
}

export default App;
