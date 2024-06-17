// import ProductsList from "../components/Products/ProductsList";
import { useEffect, useState } from "react";
import { Fade, Container, Card, Box, Button, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { getAllProducts } from "../../services/api";
import Styles from "./Homepage.styles";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);   // state to track the number of cards to display

  // Function to handle "View more" button click
  const handleViewMore = () => {
    setDisplayCount(prevCount => prevCount + 6); // Increment by 6 to show the next batch of cards
  };

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
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Hero />
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={4}>
        {!loading && !error && products.slice(0, displayCount).map(({ id, image_url, product_name, description }) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Fade in={true} timeout={1000}>
              <Card
                sx={Styles.card}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={image_url}
                />
                <CardContent sx={Styles.cardContent} align="center">
                  <Typography gutterBottom variant="h5" component="h2">
                    {product_name}
                  </Typography>
                  <Typography>{description}</Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>

      {displayCount < products.length && (

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" size="large" onClick={handleViewMore}>
            View more
          </Button>
        </Box>
      )}
    </Container>
    // <div>
    //   <h1>React on Rails Home Page</h1>
    //   <p>Find this application layout in client/src/App.jsx</p>
    //   <ProductsList />
    // </div>
  )
}

export default HomePage;
