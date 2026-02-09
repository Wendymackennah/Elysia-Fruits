import { Container, Grid, Typography, Box, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/products';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box bgcolor="#FFF9F2" color="#333">
      <Navbar />

      {/* Hero Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight="bold" gutterBottom color="green">
              Fresh Fruits, Beautifully Delivered.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Premium fruits, juices, and fruit hampers sourced fresh and delivered with care.
            </Typography>
            <Box>
              <Button variant="contained" color="success" sx={{ mr: 2 }} onClick={() => navigate('/shop')}>
                Shop Now
              </Button>
              <Button variant="outlined" color="success" onClick={() => navigate('/shop')}>
                Explore
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1574226516831-e1dff420e8f8"
              borderRadius={4}
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Categories */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
          Our Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((cat) => (
            <Grid item xs={12} sm={6} md={3} key={cat.name}>
              <CategoryCard {...cat} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

