import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";

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
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Grid>
    </div>
  );
};

export default News;
