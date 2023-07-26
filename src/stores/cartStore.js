import { writable } from "svelte/store";

export const cart = writable([]);

export function addItem(item) {
    cart.update(items => {
      const existingItem = items.find(i => i.id === item.id);
  
      if (existingItem) {
        // If the item already exists in the cart, update the quantity property
        return items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        return [...items, { ...item, quantity: 1 }];
      }
    });
  }

export function changeQuantity(item, num) {
  cart.update(items => {
    // Find the item in the cart
    const updatedItems = items.map(i => {
      if (i.id === item.id) {
        // Calculate the new quantity
        const newQuantity = i.quantity + num;

        // Remove the item from the cart if the new quantity is zero or less
        if (newQuantity <= 0) {
          return null;
        }

        // Update the quantity of the item
        return { ...i, quantity: newQuantity };
      }

      return i;
    });

    // Filter out null (removed) items
    return updatedItems.filter(i => i !== null);
  });
}

export function removeItem(item) {
    cart.update(items => items.filter(i => i.id !== item.id))
}