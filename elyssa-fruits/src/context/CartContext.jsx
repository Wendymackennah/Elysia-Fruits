import React, { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);
const addToCart = (product) => {
setCart(prev => {
const exists = prev.find(p => p.name === product.name);
if(exists) return prev.map(p => p.name === product.name ? {...p, qty: p.qty + 1} : p);
return [...prev, {...product, qty: 1}];
});
};
const removeFromCart = (name) => setCart(prev => prev.filter(p => p.name !== name));
const clearCart = () => setCart([]);
return (
<CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
{children}
</CartContext.Provider>
);
};