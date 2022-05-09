import logo from './logo.svg';
import './App.css';
import React , { useEffect, useState } from 'react';
import Country from './Componets/Country/Country';
import Cart from './Componets/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  const [cart ,setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data =>{setCountries(data)})
     .catch(error => console.log(error)) // error find
  }, [])
   
  const handleAddCountry = (country) => {
    // console.log('country added', country)
    const newCart  = [...cart , country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1>Loaded Country : {countries.length}</h1>
      <h1>Added Country : {cart.length}</h1>
      <Cart cart={cart}></Cart>

         <ul>
          {
            // countries.map(country => console.log(country.name))
            
            countries.map(country => <Country handleAddCountry={handleAddCountry} key={country.name} country={country}></Country>)
          }
         </ul>
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
