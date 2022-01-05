import { Grid, Typography } from "@mui/material";
import NewsCard from "../components/NewsCard";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 50,
  });

  console.log(cryptoNews);

  if (!cryptoNews?.value) return "Loading...";
  return (
    <div style={{ height: "100%" }}>
      <Typography variant="h1" color="primary" sx={{ pt: "5vh" }}>
        News Page
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {cryptoNews.value.map((item, index) => (
          <NewsCard item={item} key={index} i={index} />
        ))}
      </Grid>
    </div>
  );
};

export default News;
