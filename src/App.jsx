import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form";
import Login from "./components/login";
import Table from "./components/table";

export default function App() {
  return(
    <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Crud" element={<Form/>}/>
      <Route path="/View" element={<Table/>}/>
     
    </Routes>
    </div>
  )
}
