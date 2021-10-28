import React, { useState } from 'react';
import Menu from './pages/Menu/MenuMain/MenuMain';
import Food from './pages/Food/FoodMain/FoodMain';
import Drink from './pages/Drink/DrinkMain/DrinkMain';

export default function App() {
  const [screen, setScreen] = useState('menu');

  if (screen === 'menu') {
    return getScreenMenu();
  } else if (screen === 'food') {
    return getScreenFood();
  } else if (screen === 'drink') {
    return getScreenDrink();
  };

  function getScreenMenu() {
    return <Menu setScreen={setScreen} />
  };

  function getScreenFood() {
    return <Food setScreen={setScreen} />
  };

  function getScreenDrink() {
    return <Drink setScreen={setScreen} />
  };
};
