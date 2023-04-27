import NavBar from "./components/NavBar";
import UserInput from "./components/UserInput/UserInput";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <UserInput handleSubmit={() => {}} />
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
