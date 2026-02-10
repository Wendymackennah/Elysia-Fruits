import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../context/CartContext';
export default function CartDrawer({ open, onClose }) {
const { cart, removeFromCart, clearCart } = useCart();
return (
<Drawer anchor="right" open={open} onClose={onClose}>
<Box sx={{ width: 350, p: 2 }}>
<Box display="flex" justifyContent="space-between" alignItems="center">
<Typography variant="h6">Your Cart</Typography>
<IconButton onClick={onClose}><CloseIcon /></IconButton>
</Box>
<List>
{cart.map(item => (
<ListItem key={item.name} secondaryAction={<Button color="error" onClick={() => removeFromCart(item.name)}>Remove</Button>}>
<ListItemText primary={`${item.name} x${item.qty}`} secondary={`KES ${item.price * item.qty}`} />
</ListItem>
))}
</List>
<Button fullWidth variant="contained" color="success" sx={{ mt: 2 }} onClick={clearCart}>Clear Cart</Button>
</Box>
</Drawer>
);
}