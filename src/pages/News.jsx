import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div style={{ height: "100%" }}>
      <Typography variant="h1" color="primary" sx={{ pt: "40vh" }}>
        News Page
      </Typography>
      <Link
        to="/news/1"
        style={{
          color: "goldenRod",
          textDecoration: "none",
        }}
      >
        News Item
      </Link>
    </div>
  );
};

export default News;
