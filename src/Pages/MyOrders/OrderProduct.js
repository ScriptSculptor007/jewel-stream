import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { Col } from "react-bootstrap";
import "../Products/Products.css";

const OrderProduct = ({ order }) => {
  const { product, status, _id } = order;

  // handle delete data function
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want to Delete ?");
    if (procced) {
    }
  };

  // return orders here
  return (
    <Col xs={12} md={4}>
      <Card sx={{ minWidth: "90%" }}>
        <CardActionArea>
          <CardMedia
            height={352}
            component="img"
            image={product.image}
            alt="jewelry"
          />
          <CardContent>
            <p className="product-title">{product.title}</p>
            <p className="product-vendor">{status}</p>
            <Rating name="read-only" value={product.rating} readOnly />
          </CardContent>
        </CardActionArea>
        <CardActions className="d-flex justify-content-between">
          <p className="product-price">${product.price}</p>
          <Button variant="contained" onClick={() => handleDelete(_id)}>
            Delete Now
          </Button>
        </CardActions>
      </Card>
    </Col>
  );
};

export default OrderProduct;
