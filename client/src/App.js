import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllRoutes from "./components/AllRoutes";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <Sidebar /> */}
      {/* <Post /> */}
    </div>
  );
}

export default App;
