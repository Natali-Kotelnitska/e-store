
import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/api";
import { Card, Box, Button, CardContent, CardMedia, Grid, Typography, CardHeader } from "@mui/material";
import itemStyles from "./ItemStyles";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Reset error state before making a new request
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (e) {
        setError("Oops. Something went wrong ...");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 2, paddingTop: 16 }}>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={4}>
        {!loading && !error && products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <Card sx={itemStyles.card}>
              <CardHeader
                title={`Item ${product.id}`}
                sx={itemStyles.cardHeader}
              />

              <CardMedia
                component="div"
                sx={itemStyles.cardMedia}
                image={product.image_url}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  {product.product_name}
                </Typography>
                <Typography>{product.description}</Typography>
                <Typography variant="h6">
                  Price: ${product.price}
                </Typography>
                <Typography>Brand: {product.brand}</Typography>
                <Typography>Size: {product.size}</Typography>
                <Typography>Material: {product.material}</Typography>

                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to={`/catalog/${product.id}`}
                  sx={{ mt: 4, width: '150px', alignSelf: 'center' }}
                >
                  View more
                </Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box >
  );
}

export default ProductsList;


// useEffect(() => {
//   async function loadProducts() {
//     try {
//       const response = await fetch((`${API_URL}/products`));

//       // if (!response) {
//       //   return <BigSpinner />;
//       // }

//       if (response.ok) {
//         const json = await response.json();
//         setProducts(json);
//       } else {
//         throw response;
//       }
//     } catch (e) {
//       setError("An error occurred. Awkward...");
//       console.log("An error occurred:", e);
//     } finally {
//       setLoading(false);
//     }
//   }
//   loadProducts();

// }, []);
