import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllRoutes from "./components/AllRoutes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <Sidebar />
    </div>
  );
}

export default App;
