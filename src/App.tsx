import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Button className="bg-slate-600 p-5">Home</Button>
            </div>
          }
        />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/users" element={<div>Users</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
