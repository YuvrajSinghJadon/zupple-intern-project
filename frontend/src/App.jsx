import { Route, Routes } from "react-router-dom";
import Form from "./pages/FormPage.jsx";
import Blockchain from "./pages/Blockchain.jsx";
import Button from "./components/Button.jsx";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/blockchain" element={<Blockchain />} />
      </Routes>
    </main>
  );
}

export default App;
