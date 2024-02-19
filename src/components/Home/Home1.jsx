
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import NavBar from './Navbar';
import baseUrl from '../../Api';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';
import Cart from './Home1cart';

const Home1 = () => {
  const [petList, setPetList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
 
  const [cart, setCart] = useState([]);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl + '/pet/tfetch')
      .then((response) => {
        console.log(response.data);
        setPetList(response.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  const handleSearch = (searchTerm) => {
    // Implement your search logic here based on the searchTerm
    console.log('Searching for:', searchTerm);
    // You can update the state, make an API call, or perform any other action based on the search term
  };

  const handleViewDetails = (pet) => {
    setSelectedPet(pet);
  };

  const handleAddToCart = (pet) => {
    setCart([...cart, pet]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="home-page">
      <NavBar />
      <div className="welcome-section">
        <h1>Welcome to Our Pet Store</h1>
        <h1>PET HUB</h1>
        <p>Find your new furry friend with us!</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="featured-pets-section">
        <h2>Featured Pets</h2>
        <div className="featured-pets">
          {petList.length ? (
            petList.map((pet) => (
              <div key={pet.id} className="featured-pet-card">
                <img src={`data:${pet.Image.contentType};base64,${pet.Image.data}`} alt="petImage" />
                <h3>{pet.PetName}</h3>
                <p>{pet.Breed}</p>
                <p>${pet.Price}</p>
                <button onClick={() => handleViewDetails(pet)}>View Details</button>
                <button onClick={() => handleAddToCart(pet)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      {selectedPet && (
        <div className="selected-pet-details">
          <h2>{selectedPet.PetName}</h2>
          <p>{selectedPet.Breed}</p>
          <p>${selectedPet.Price}</p>
          <button onClick={() => setSelectedPet(null)}>Close</button>
        </div>
      )}

      <Link to="/Home1cart">View Cart</Link>

      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Home1;
