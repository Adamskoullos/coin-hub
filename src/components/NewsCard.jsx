import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NewsCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
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
    </Grid>
  );
};

export default NewsCard;
