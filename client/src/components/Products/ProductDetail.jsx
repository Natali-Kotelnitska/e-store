import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, MenuItem, TextField, Typography, CircularProgress } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getProductById } from "../../services/api";
import { styles } from "./ItemPage.styles";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await getProductById(itemId);
        setProduct(fetchedProduct);
      } catch (error) {
        setError("Oops. Something went wrong ...");
        console.error(`Error fetching product ${itemId}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [itemId]);

  if (!product) return <h2>Loading ...</h2>;

  return (
    <Container sx={styles.container}>
      {error && <Typography color="error">{error}</Typography>}
      {loading ? (
        <CircularProgress color="secondary" />
      ) : product ? (
        <>
          <div style={styles.imageContainer}>
            <img src={product.image_url} alt={product.product_name} style={styles.image} />
            <div style={styles.infoContainer}>
              <span style={styles.brandTag}>Brand: {product.brand}</span>
              <span style={styles.sizeTag}>Size: {product.size}</span>
              <Typography variant="h2" style={styles.title}>{product.product_name}</Typography>
              <Typography variant="body1" style={styles.description}>{product.description}</Typography>

              <TextField
                id="outlined-basic"
                label="Quantity"
                type="number"
                variant="outlined"
                size="small"
                value={quantity}
                // onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style={styles.quantityInput}
              />

              {product.colors && product.colors.length > 0 && (
                <TextField
                  select
                  label="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  helperText="Please select your color"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  sx={styles.colorSelect}
                >
                  {product.colors.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            </div>
          </div>

          <div style={styles.buttonContainer}>
            <Typography variant="h6" style={styles.price}>Price: ${product.price}</Typography>

            <div style={styles.actionButton}>
              <Button variant="contained" color="success" onClick={() => { navigate('/catalog') }} size="medium" sx={{ mb: 4, mr: 4 }}>
                Go Back
              </Button>

              <Button variant="contained" startIcon={<AddShoppingCartIcon />} aria-label="add to shopping cart" sx={{ mb: 4 }}>
                Add to Cart
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Typography variant="h2">Item not found</Typography>
      )}
    </Container>
  );
}

export default ProductDetails;
