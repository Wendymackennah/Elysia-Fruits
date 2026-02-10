import { Container, Typography, Box, Button, List, ListItem, ListItemText } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <Navbar />
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
          Checkout
        </Typography>

        <List>
          {cart.map((item) => (
            <ListItem key={item.name}>
              <ListItemText primary={`${item.name} x${item.qty}`} secondary={`KES ${item.price * item.qty}`} />
            </ListItem>
          ))}
        </List>

        <Box mt={4} textAlign="center">
          <Typography variant="h6" mb={2}>
            Total: KES {total}
          </Typography>
          <Button variant="contained" color="success" onClick={clearCart}>
            Confirm & Pay
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
