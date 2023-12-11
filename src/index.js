import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const {data} = await axios.get('/api/food');
      setFood(data);
    }
    fetchFood();
  },[]);


  return (
    <div>
      <h1>Nutrition Tracker</h1>
      <h2>Food Items ({food.length})</h2>
      <ul>
        {
          food.map((foodItem) => {
            return(
              <li key={foodItem.id}>
                <h2>
                  {foodItem.name}
                </h2>
                <p>
                  Calories: {foodItem.calories} kCal
                </p>
                <p>
                  Protein: {foodItem.Protein}g
                </p>
                <p>
                  Carbs: {foodItem.carbohydrate}g
                </p>
                <p>
                  Fat: {foodItem.fat}g
                </p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
