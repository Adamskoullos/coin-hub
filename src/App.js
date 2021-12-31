import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Paper } from "@mui/material";
import appTheme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SnapShot from "./pages/SnapShot";
import SpreadCharts from "./pages/SpreadCharts";
import Fundamentals from "./pages/Fundamentals";
import Coins from "./pages/Coins";

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
                <Route path="/login" element={<Login someProp={true} />} />
                <Route
                  path="/snapshot"
                  element={<SnapShot someProp={true} />}
                />
                <Route
                  path="/spread-charts"
                  element={<SpreadCharts someProp={true} />}
                />
                <Route
                  path="/fundamentals"
                  element={<Fundamentals someProp={true} />}
                />
                <Route path="/coins" element={<Coins someProp={true} />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
