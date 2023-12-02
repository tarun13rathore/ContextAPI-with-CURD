import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddEmployee />} exact />
          <Route path="/edit/:id" element={<EditEmployee />} exact />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
