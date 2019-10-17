import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './context/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {

	//states of the APP |
	                //  V
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart

		setCart(item);
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
					/>
				)}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}/>}
			/>
		</div>
		</ProductContext.Provider>
	);
	
}

export default App;
