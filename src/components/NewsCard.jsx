import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const NewsCard = ({ url }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={url} style={{ textDecoration: "none" }}>
        <Card variant="outlined">
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "goldenRod" }} aria-label="recipe">
                  V
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="The news event headline"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="150rem"
              image="https://media.timeout.com/images/105124791/750/422/image.jpg"
              alt="Paella dish"
            />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default NewsCard;
