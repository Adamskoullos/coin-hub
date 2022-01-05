import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import InsightsSharpIcon from "@mui/icons-material/InsightsSharp";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import CandlestickChartSharpIcon from "@mui/icons-material/CandlestickChartSharp";
import AccountTreeSharpIcon from "@mui/icons-material/AccountTreeSharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { ListItemIcon } from "@mui/material";

// Top Layer Nav >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Desktop Nav and sub menus >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 4,
              display: { xs: "none", lg: "flex" },
              color: "goldenRod",
              mb: 0.4,
            }}
          >
            Vulcon
          </Typography>
          {/* Mobile Nav >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              <MenuItem key="mob-analysis" onClick={handleCloseNavMenu}>
                <ListItemIcon>
                  <InsightsSharpIcon fontSize="small" />
                </ListItemIcon>
                <Typography
                  textAlign="center"
                  id="mob-analysis-button"
                  aria-controls="mob-analysis-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Analysis
                </Typography>
                {/* Testing how to add the drop down <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <Menu
                  id="mob-analysis-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "mob-analysis-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>SnapShot</MenuItem>
                  <MenuItem onClick={handleClose}>Spread Charts</MenuItem>
                  <MenuItem onClick={handleClose}>Fundamentals</MenuItem>
                  <MenuItem onClick={handleClose}>Coins</MenuItem>
                  <MenuItem onClick={handleClose}>6 Chart Dash</MenuItem>
                  <MenuItem onClick={handleClose}>1 Chart Dash</MenuItem>
                </Menu>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
              </MenuItem>
              <MenuItem key="mob-news" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">News</Typography>
              </MenuItem>
              <MenuItem key="mob-defi" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">DeFi</Typography>
              </MenuItem>
              <MenuItem key="mob-trade" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Trade</Typography>
              </MenuItem>
              <MenuItem key="mob-portfolio" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Portfolio</Typography>
              </MenuItem>
              {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none" },
              color: "goldenRod",
            }}
          >
            LOGO
          </Typography>
          {/* Desktop Nav >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Button onClick={() => {}}>
              <NavLink
                to="/snapshot"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "darkGrey",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                  };
                }}
              >
                <BarChartSharpIcon sx={{ mr: 1, fontSize: 17, pb: 0.3 }} />
                SnapShot
              </NavLink>
            </Button>
            <Button onClick={() => {}}>
              <NavLink
                to="/news"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "darkGrey",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                  };
                }}
              >
                <RssFeedSharpIcon sx={{ mr: 1, fontSize: 17, pb: 0.3 }} />
                News
              </NavLink>
            </Button>
            <Button onClick={() => {}}>
              <NavLink
                to="/coins"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "darkGrey",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                  };
                }}
              >
                <ShowChartSharpIcon sx={{ mr: 1, fontSize: 17, pb: 0.2 }} />
                Coins
              </NavLink>
            </Button>
            <Button onClick={() => {}}>
              <NavLink
                to="/defi"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "darkGrey",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                  };
                }}
              >
                <QueryStatsSharpIcon sx={{ mr: 1, fontSize: 17, pb: 0.2 }} />
                DeFi
              </NavLink>
            </Button>
            <Button onClick={() => {}}>
              <NavLink
                to="/six-charts"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "darkGrey",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                  };
                }}
              >
                <CandlestickChartSharpIcon
                  sx={{ mr: 1, fontSize: 18, pb: 0.2 }}
                />
                6 Charts
              </NavLink>
            </Button>
            <Button onClick={() => {}}>
              <NavLink
                to="/one-chart"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "darkGrey",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                  };
                }}
              >
                <CandlestickChartSharpIcon
                  sx={{ mr: 1, fontSize: 18, pb: 0.2 }}
                />
                Chart
              </NavLink>
            </Button>
            <Button onClick={() => {}}>
              <NavLink
                to="/onchain"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "darkGrey",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                  };
                }}
              >
                <AccountTreeSharpIcon sx={{ mr: 1, fontSize: 17, pb: 0.2 }} />
                OnChain
              </NavLink>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <SettingsIcon sx={{ color: "darkGrey" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              onClick={handleCloseUserMenu}
            >
              <MenuItem key="deposit" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Deposit Fiat</Typography>
              </MenuItem>
              <MenuItem key="withdraw" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Withdraw Fiat</Typography>
              </MenuItem>
              <MenuItem key="connect-wallet" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Connect Wallet</Typography>
              </MenuItem>
              <MenuItem key="settings" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
              <MenuItem key="faq" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">FAQ's</Typography>
              </MenuItem>
              <MenuItem key="logout" onClick={handleCloseNavMenu}>
                <Typography textAlign="Settings">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
