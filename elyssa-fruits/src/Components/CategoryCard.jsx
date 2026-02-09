import { Paper, Typography, Box } from '@mui/material';
export default function CategoryCard({ name, emoji }) {
return (
<Paper elevation={3} sx={{ py: 6, textAlign: 'center', borderRadius: 3, bgcolor: '#FFF4E6' }}>
<Box sx={{ fontSize: 50, mb: 2 }}>{emoji}</Box>
<Typography variant="h6" fontWeight="medium">{name}</Typography>
</Paper>
);
}