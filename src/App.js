import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import New from "./pages/New";
import { Paper } from "@mui/material";
import appTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Paper style={{ height: "100vh", borderRadius: 0 }}>
        <Router>
          <div className="App">
            <Navbar />

            <div className="content">
              <Routes>
                <Route path="/" element={<Home someProp={true} />} />
                <Route path="/new" element={<New someProp={true} />} />
              </Routes>
              <button color="">Big Balls</button>
            </div>
          </div>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
