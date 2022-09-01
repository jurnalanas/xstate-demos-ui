import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Example1 from "./example1";
import Example1End from "./example1-end";
import Example2 from "./example2";
import Example3 from "./example3";

import "./App.css";
import Example4 from "./example4";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="inline">
            <li>
              <Link to="/example1">Example 1</Link>
            </li>
            <li>
              <Link to="/example1-end">Example 1: Solution</Link>
            </li>
            <li>
              <Link to="/example2">Example 2: Invoke</Link>
            </li>
            <li>
              <Link to="/example3">Example 3: Guard</Link>
            </li>
            <li>
              <Link to="/example4">Example 4</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/example1" element={<Example1 />} />
          <Route path="/example1-end" element={<Example1End />} />
          <Route path="/example2" element={<Example2 />} />
          <Route path="/example3" element={<Example3 />} />
          <Route path="/example4" element={<Example4 />} />
        </Routes>
      </div>
    </Router>
  );
}
