import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Dimensions, Alert, StyleSheet } from 'react-native';

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

  switch (screen) {
    case 'menu':
      return getScreenMenu();
    case 'food':
      return getScreenFood();
    case 'drink':
      return getScreenDrink();
  };

  function getScreenMenu() {
    return (
      <View>
        <Text>Menu</Text>
        <Text>About..........</Text>
        <TouchableOpacity onPress={() => setScreen('food')} style={Styles.buttonFood}>
          <Text>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('drink')} style={Styles.buttonDrink}>
          <Text>Drink</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenFood() {
    return (
      <View>
        <View>
          <Text>Inform below how many grams of protein, carbohydrates and fat the food have</Text>
        </View>
        <View>
          <Text>Protein</Text>
          <TextInput keyboardType="numeric" onChangeText={text => proteins(text)} style={Styles.input} />
        </View>
        <View>
          <Text>Carbohydrate</Text>
          <TextInput keyboardType="numeric" onChangeText={text => carbohydrates(text)} style={Styles.input} />
        </View>
        <View>
          <Text>Fat</Text>
          <TextInput keyboardType="numeric" onChangeText={text => fats(text)} style={Styles.input} />
        </View>
        <View>
          <TouchableOpacity onPress={calculateFood} style={Styles.button}>
            <Text style={Styles.buttonText}>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Your food have {resultFood} calories</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => foodBacktoMenu()}>
            <Text>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  function getScreenDrink() {
    return (
      <View>
        <View>
          <Text>Inform bellow how many milliliters(ml) of drink you have and what's its alcohol by volume(ABV)</Text>
        </View>
        <View>
          <Text>Milliliters(ml)</Text>
          <TextInput keyboardType="numeric" onChangeText={text => milliliters(text)} style={Styles.input} />
        </View>
        <View>
          <Text>Alcohol by Volume(ABV)</Text>
          <TextInput keyboardType="numeric" onChangeText={text => alcohols(text)} style={Styles.input} />
        </View>
        <View>
          <TouchableOpacity onPress={calculateDrink} style={Styles.button}>
            <Text>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Your drink have {resultDrink} calories</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => drinkBackToMenu()}>
            <Text>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};

const Styles = StyleSheet.create({
  buttonFood: {
    width: Dimensions.get('screen').width / 4,
    backgroundColor: '#fa6',
  },
  buttonDrink: {
    width: Dimensions.get('screen').width / 4,
    backgroundColor: '#a5f',
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
  }
});
