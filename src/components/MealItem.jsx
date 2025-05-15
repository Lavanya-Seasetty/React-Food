import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import PopupMessage from './UI/PopupMessage.jsx';
import { useContext, useState } from 'react';

export default function MealItem({ meal }) {
  const BACKEND_URL = 'https://food-order-backend-jzse.onrender.com';
  const cartCtx = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

   function handleAddMealToCart() {
    cartCtx.addItem(meal);
    setShowPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
  }
  
  return (
    <li className="meal-item">
      <article>
        <img src={`${BACKEND_URL}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
         {showPopup && <PopupMessage message="Added to cart!" onClose={handleClosePopup} />}
      </article>
    </li>
  );
}
