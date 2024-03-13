import React, { useState } from 'react';
import './AddNewProduct.css';

const Create = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    categories: '',
    price: {},
    text: '',
    action: '',
    img: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      alert('Product added successfully!');
      // Frissítheted az oldalt vagy más dolgot végezhetsz itt
    } catch (error) {
      alert('Error adding product:', error);
    }
  };

  return (
    <section className='new_products'>
      <h2>Új Termék Hozzáadása</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Név: <br />
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Kategória: <br />
          <input type="text" name="categories" value={newProduct.categories} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Ár: <br />
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Leírás: <br />
          <input type="text" name="text" value={newProduct.text} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Akció: <br />
          <input type="number" name="action" value={newProduct.action} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Kép URL: ./img/<br />
          <input type="text" name="img" value={newProduct.img} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Hozzáadás</button>
      </form>
    </section>
  );
};

export default Create;
//kepet majd valamikor multerrel megcsinalni!