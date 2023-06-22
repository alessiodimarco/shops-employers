import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { ProductProps } from "./ProductGrid";

export const Product = ({ productData, onDelete }: ProductProps) => {
  return (
    <Card sx={{ maxWidth: 285 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <span style={{ fontSize: 13 }}>{productData.data.price}€</span>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon onClick={() => onDelete(productData.id)} />
          </IconButton>
        }
        title={productData.data.title}
        subheader={productData.data.category}
      />
      <CardMedia component="img" height="194" image="/product-sample.jpg" alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productData.data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
