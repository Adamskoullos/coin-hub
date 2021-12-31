import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DeFi = () => {
  return (
    <div style={{ height: "100%" }}>
      <Typography variant="h1" color="primary" sx={{ pt: "40vh" }}>
        DeFi Page
      </Typography>
      <Link
        to="/defi/1"
        style={{
          color: "goldenRod",
          textDecoration: "none",
        }}
      >
        DeFi Protocol
      </Link>
    </div>
  );
};

export default DeFi;
