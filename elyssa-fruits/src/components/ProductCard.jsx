import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useCart } from '../context/CartContext';
export default function ProductCard({ name, price, image }) {
const { addToCart } = useCart();
return (
<Card sx={{ borderRadius: 4, boxShadow: 3 }}>
<CardMedia component="img" height="240" image={image} alt={name} />
<CardContent>
<Typography variant="h6" fontWeight="bold">{name}</Typography>
<Typography variant="body2" color="text.secondary">Fresh • Organic • Delicious</Typography>
</CardContent>
<CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
<Typography color="green" fontWeight="bold">KES {price}</Typography>
<Button variant="contained" size="small" color="success" onClick={() => addToCart({name, price, image})}>Add to Cart</Button>
</CardActions>
</Card>
);
}