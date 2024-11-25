import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import LoginPage from "./LoginPage";
import ShoesPage from "./ShoesPage";
import AddShoePage from "./AddShoePage";
import ShoePage from "./ShoePage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/shoes/add" element={<AddShoePage />} />
          <Route path="/shoes/:shoeId" element={<ShoePage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
