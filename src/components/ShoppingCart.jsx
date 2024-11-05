// src/components/ShoppingCart.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ShoppingCart.module.css'; // Import CSS module

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [price, setPrice] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const navigate = useNavigate();

  // Fungsi untuk menambahkan item baru
  const addItem = () => {
    if (newItem.trim() === '' || price === '') return; // Prevent adding empty items
    setItems([...items, { name: newItem, price: parseFloat(price), qty: 1 }]);
    setNewItem('');
    setPrice('');
  };

  // Fungsi untuk mengedit item
  const editItemHandler = (index) => {
    setEditIndex(index);
    setEditItem(items[index].name);
    setEditPrice(items[index].price);
  };

  const updateItem = () => {
    if (editItem.trim() === '' || editPrice === '') return; // Prevent updating to empty item
    const updatedItems = items.map((item, index) =>
      index === editIndex ? { ...item, name: editItem, price: parseFloat(editPrice) } : item
    );
    setItems(updatedItems);
    setEditIndex(null);
    setEditItem('');
    setEditPrice('');
  };

  // Fungsi untuk menghapus item
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Fungsi untuk menambah quantity
  const increaseQty = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(updatedItems);
  };

  // Fungsi untuk mengurangi quantity
  const decreaseQty = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(updatedItems);
  };

  // Fungsi untuk menghitung total harga
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleComplete = () => {
    // Navigasi ke halaman selesai
    navigate('/completed');
  };

  return (
    <div className={styles.shoppingCart}>
      <h2>Shopping Cart</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className={styles.addButton} onClick={addItem}>Add</button>
      </div>

      {editIndex !== null && (
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Edit Item Name"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
          />
          <input
            type="number"
            placeholder="Edit Price"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <button className={styles.editButton} onClick={updateItem}>Update</button>
        </div>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={index} className={styles.itemRow}>
            {item.name} - Rp {item.price.toLocaleString()} x {item.qty} = Rp {(item.price * item.qty).toLocaleString()}
            <div className={styles.qtyButtons}>
              <button onClick={() => decreaseQty(index)} className={styles.qtyButton}>-</button>
              <button onClick={() => increaseQty(index)} className={styles.qtyButton}>+</button>
            </div>
            <div>
              <button className={styles.editButton} onClick={() => editItemHandler(index)}>Edit</button>
              <button className={styles.deleteButton} onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <strong>Total: Rp {calculateTotal().toLocaleString()}</strong>
      </div>

      <button className={styles.completeButton} onClick={handleComplete}>Complete</button>
    </div>
  );
}

export default ShoppingCart;
