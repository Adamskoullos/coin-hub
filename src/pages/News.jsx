import { Grid, Typography } from "@mui/material";
import NewsCard from "../components/NewsCard";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = () => {
  const url = "/news/1";

  return (
    <div style={{ height: "100%" }}>
      <Typography variant="h1" color="primary" sx={{ pt: "5vh" }}>
        News Page
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <NewsCard url={url} />
        <NewsCard url={url} />
        <NewsCard url={url} />
        <NewsCard url={url} />
        <NewsCard url={url} />
      </Grid>
    </div>
  );
};

export default News;
