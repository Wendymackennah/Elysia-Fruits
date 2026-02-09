import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CartDrawer from './CartDrawer';
import { useState } from 'react';
export default function Navbar() {
const [openCart, setOpenCart] = useState(false);
return (
<>
<AppBar position="sticky" color="default" elevation={1} sx={{ mb: 4 }}>
<Toolbar sx={{ justifyContent: 'space-between' }}>
<Typography variant="h6" color="success.main">🍓 ELYSSA Fruits</Typography>
<Button variant="contained" color="success" onClick={() => setOpenCart(true)}>Cart</Button>
</Toolbar>
</AppBar>
<CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
</>
);
}