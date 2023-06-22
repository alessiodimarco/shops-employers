import DeleteIcon from "@mui/icons-material/Delete";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import { ProductProps } from "./ProductGrid";

export const Product = ({ productData, onDelete, defaultLayout }: ProductProps) => {
  const [showReview, setShowReview] = useState(false);

  const setProductWidth = () => (defaultLayout ? { maxWidth: "100%" } : { maxWidth: 285 });

  return (
    <>
      <Card sx={setProductWidth}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "black" }}>
              <span style={{ fontSize: 13 }}>{productData.data.price}€</span>
            </Avatar>
          }
          action={
            <IconButton>
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
          <Button
            onClick={() => setShowReview(true)}
            fullWidth={true}
            variant="outlined"
            startIcon={<RateReviewIcon />}
          >
            Show Reviews
          </Button>
        </CardActions>
        <Dialog open={showReview} keepMounted onClose={() => setShowReview(false)}>
          <DialogTitle>{productData.data.title} reviews</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {productData.data.reviews &&
                (productData.data.reviews.length > 0
                  ? productData.data.reviews.map((review, i) => <span key={i}>{review}</span>)
                  : "No reviews available")}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Card>
    </>
  );
};
