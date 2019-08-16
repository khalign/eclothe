export const updateCart = (cartItems, itemToAdd) => {
    const found = cartItems.find(
      item => item.id === itemToAdd.id
    );
  
    if (found) {
      return cartItems.map(item =>
        item.id === itemToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
  
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  };
  