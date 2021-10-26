import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import FoodImage from './src/assets/img/FoodImage.svg';
import DrinkImage from './src/assets/img/DrinkImage.svg';

export default function App() {
  const [protein, setProtein] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [fat, setFat] = useState(0);
  const [milliliter, setMilliliter] = useState(0);
  const [alcohol, setAlcohol] = useState(0);
  const [resultFood, setResultFood] = useState(0);
  const [resultDrink, setResultDrink] = useState(0);
  const [screen, setScreen] = useState('menu');

  const proteins = (value) => {
    setProtein(value);
  };

  const carbohydrates = (value) => {
    setCarbohydrate(value);
  }

  const fats = (value) => {
    setFat(value);
  };

  const calculateFood = () => {
    let caloriesFood = Number((protein * 4) + (carbohydrate * 4) + (fat * 9)).toFixed(0);
    setResultFood(caloriesFood);
  };

  const milliliters = (value) => {
    setMilliliter(value);
  };

  const alcohols = (value) => {
    setAlcohol(value);
  };

  const calculateDrink = () => {
    let caloriesDrink = Number(milliliter * alcohol / 100 * 7).toFixed(0);
    setResultDrink(caloriesDrink);
  };

  const foodBacktoMenu = () => {
    setScreen('menu');
    setResultFood(0);
  };

  const drinkBackToMenu = () => {
    setScreen('menu');
    setResultDrink(0);
  };

  if (screen === 'menu') {
    return getScreenMenu();
  } else if (screen === 'food') {
    return getScreenFood();
  } else if (screen === 'drink') {
    return getScreenDrink();
  };

  function getScreenMenu() {
    return (
      <View style={Styles.containerMenu}>
        <StatusBar backgroundColor="#170a28" />
        <Text style={Styles.titleMenu}>Menu</Text>
        <Text style={Styles.captionMenu}>Do you want to find out the amount of calories in a food or drink?</Text>
        <TouchableOpacity onPress={() => setScreen('food')} style={Styles.buttonFood}>
          <Text style={Styles.textButtonsMenu}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('drink')} style={Styles.buttonDrink}>
          <Text style={Styles.textButtonsMenu}>Drink</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenFood() {
    return (
      <View style={Styles.containerFood}>
        <Text style={Styles.titleFood}>Inform below how many grams of protein, carbohydrates and fat the food have</Text>
        <Text>Protein</Text>
        <TextInput keyboardType="numeric" onChangeText={text => proteins(text)} style={Styles.input} />
        <Text>Carbohydrate</Text>
        <TextInput keyboardType="numeric" onChangeText={text => carbohydrates(text)} style={Styles.input} />
        <Text>Fat</Text>
        <TextInput keyboardType="numeric" onChangeText={text => fats(text)} style={Styles.input} />
        <TouchableOpacity onPress={calculateFood} style={Styles.button}>
          <Text style={Styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <Text>Your food have {resultFood} calories</Text>
        <TouchableOpacity onPress={() => foodBacktoMenu()}>
          <Text>Back to Menu</Text>
        </TouchableOpacity>
        <FoodImage width="70%" />
      </View>
    );
  };

  function getScreenDrink() {
    return (
      <View>
        <Text>Inform bellow how many milliliters(ml) of drink you have and what's its alcohol by volume(ABV)</Text>
        <Text>Milliliters(ml)</Text>
        <TextInput keyboardType="numeric" onChangeText={text => milliliters(text)} style={Styles.input} />
        <Text>Alcohol by Volume(ABV)</Text>
        <TextInput keyboardType="numeric" onChangeText={text => alcohols(text)} style={Styles.input} />
        <TouchableOpacity onPress={calculateDrink} style={Styles.button}>
          <Text>Calculate</Text>
        </TouchableOpacity>
        <Text>Your drink have {resultDrink} calories</Text>
        <TouchableOpacity onPress={() => drinkBackToMenu()}>
          <Text>Back to Menu</Text>
        </TouchableOpacity>
        <DrinkImage width="80%" />
      </View>
    );
  };
};

const Styles = StyleSheet.create({
  containerMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#170a28',
  },
  titleMenu: {
    fontSize: 45,
    marginTop: -60,
    marginBottom: 20,
    color: '#fff',
  },
  captionMenu: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    color: '#fff',
  },
  buttonFood: {
    width: Dimensions.get('screen').width / 2,
    height: 45,
    backgroundColor: '#ea565c',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  buttonDrink: {
    width: Dimensions.get('screen').width / 2,
    height: 45,
    backgroundColor: '#6b63ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  textButtonsMenu: {
    fontSize: 22,
    color: '#fff',
  },
  containerFood: {
    flex: 1,
  },
  titleFood: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
  },
  input: {
    width: Dimensions.get('screen').width,
    backgroundColor: '#aaa',
  },
  button: {
    width: Dimensions.get('screen').width / 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afc',
  },
  buttonText: {
    fontSize: 18,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  }
});
