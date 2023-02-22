import { Routes, Route } from "react-router-dom";
import Blogs from "./components/blogs";
import Auth from "./components/auth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/globaladmissions/" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
