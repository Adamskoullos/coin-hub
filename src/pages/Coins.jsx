import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Coins = () => {
  return (
    <div style={{ height: "100%" }}>
      <Typography variant="h1" color="primary" sx={{ pt: "40vh" }}>
        Coins Page
      </Typography>
      <Link
        to="/coins/1"
        style={{
          color: "goldenRod",
          textDecoration: "none",
        }}
      >
        Details
      </Link>
    </div>
  );
};

export default Coins;
