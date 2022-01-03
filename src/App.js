import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import appTheme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SnapShot from "./pages/SnapShot";
import SpreadCharts from "./pages/SpreadCharts";
import Fundamentals from "./pages/Fundamentals";
import Coins from "./pages/Coins";
import CoinDetails from "./pages/CoinDetails";
import SixCharts from "./pages/SixCharts";
import OneChart from "./pages/OneChart";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import DeFi from "./pages/DeFi";
import DeFiDetails from "./pages/DeFiDetails";
import Trade from "./pages/Trade";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Paper style={{ height: "100vh", borderRadius: 0 }}>
        <Router>
          <div className="App">
            <Navbar />

            {/* <div className="content"> */}
            <Container maxWidth="xl" component="main">
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
                <Route path="/coins/:id" element={<CoinDetails />} />
                <Route
                  path="/six-charts"
                  element={<SixCharts someProp={true} />}
                />
                <Route
                  path="/one-chart"
                  element={<OneChart someProp={true} />}
                />
                <Route path="/news" element={<News someProp={true} />} />
                <Route path="/news/:id" element={<NewsDetails />} />
                <Route path="/defi" element={<DeFi someProp={true} />} />
                <Route path="/defi/:id" element={<DeFiDetails />} />
                <Route path="/trade" element={<Trade someProp={true} />} />
                <Route
                  path="/portfolio"
                  element={<Portfolio someProp={true} />}
                />
              </Routes>
            </Container>
            {/* </div> */}
          </div>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
