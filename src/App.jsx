import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CardList from "./pages/CardList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rick-and-morty-api/" element={<CardList />} />
      </Routes>
    </Router>
  );
}

export default App;
