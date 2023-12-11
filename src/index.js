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
                <div>
                  
                  {foodItem.name}
                </div>
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
