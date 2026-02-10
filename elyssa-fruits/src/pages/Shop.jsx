import { Container, Grid, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../Data/products';

export default function Shop() {
  return (
    <div>
      <Navbar />
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
          Shop All Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.name}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
