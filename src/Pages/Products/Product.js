import React from "react";
import "./Products.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Product = ({
  product,
  mainCategory,
  subCategory,
  userType,
  openEditModal,
  isDashboardCard,
}) => {
  const handleProductClick = () => {
    // Log the clicked product details
  };
  const handleEditClick = () => {
    // Call the openEditModal function to open the modal with the product details
    openEditModal(product);
  };

  return (
    <Col xs={12} md={6} lg={4} className="mt-4">
      <div className="product-card">
        {isDashboardCard && (
          <EditIcon className="edit-icon" onClick={handleEditClick} />
        )}

        <Link
          to={`/products/${mainCategory}/${subCategory}/${product.product_draft_id}`}
          className="order-link"
          onClick={handleProductClick}
        >
          <div className="badge">{product.product_discount}%</div>
          <div className="product-tumb">
            <img src={product.product_images.split("_KEY_1_")[0]} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{product.product_category}</span>
            <h4>{product.product_name}</h4>
            {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p> */}
            <div className="product-bottom-details">
              <div className="product-price">
                Rs.{product.product_base_price}
              </div>
              {/* <div class="product-links">
            <a href="">
              <i class="fa fa-heart"></i>
            </a>
            <a href="">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div> */}
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default Product;
